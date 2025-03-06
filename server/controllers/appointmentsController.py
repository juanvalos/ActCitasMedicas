from flask import Blueprint, jsonify, request
from dao.supabase_client import supabase

appointments_bp = Blueprint("appointments", __name__)

@appointments_bp.route("/create", methods=["POST"])
def create_appointment():
    data = request.get_json()
    required_fields = ["motivoConsulta", "idDoctor", "fecha", "idPaciente"]
    for field in required_fields:
        if field not in data:
            return jsonify({"error": f"Falta el parámetro '{field}'"}), 400

    response = supabase.table("Citas").insert({
        "motivoConsulta": data["motivoConsulta"],
        "idDoctor": data["idDoctor"],
        "fecha": data["fecha"],
        "idPaciente": data["idPaciente"]
    }).execute()

    if response.data:
        return jsonify({"message": "Cita creada exitosamente", "cita": response.data[0]}), 201
    else:
        return jsonify({"error": "Error al crear la cita"}), 500

@appointments_bp.route("/approved", methods=["GET"])
def get_approved_appointments():
    id_doctor = request.args.get("idDoctor")
    if not id_doctor:
        return jsonify({"error": "Falta el parámetro 'idDoctor'"}), 400

    response = supabase.table("Citas").select("*").eq("idDoctor", id_doctor).eq("estado", True).execute()
    if response.data:
        return jsonify(response.data), 200
    else:
        return jsonify({"message": "No hay citas aprobadas para este doctor"}), 404

@appointments_bp.route("/pendingDoc", methods=["GET"])
def get_pending_appointments_Doc():
    id_doctor = request.args.get("idDoctor")
    if not id_doctor:
        return jsonify({"error": "Falta el parámetro 'idDoctor'"}), 400

    response = supabase.table("Citas").select("*").eq("idDoctor", id_doctor).eq("estado", False).execute()
    if response.data:
        return jsonify(response.data), 200
    else:
        return jsonify({"message": "No hay citas pendientes para este doctor"}), 404

@appointments_bp.route("/appointmentsPat", methods=["GET"])
def get_appointments_pat():
    idPaciente = request.args.get("idPaciente")
    
    if not idPaciente:
        return jsonify({"error": "Falta el parámetro 'idPaciente'"}), 400
    
    # Removed the filter for estado so that all appointments are returned
    response = supabase.table("Citas") \
        .select("*") \
        .eq("idPaciente", idPaciente) \
        .execute()
    
    if response.data:
        return jsonify(response.data), 200
    else:
        return jsonify([]), 200

@appointments_bp.route("/approve", methods=["PUT"])
def approve_appointment():
    id_cita = request.args.get("id")
    if not id_cita:
        return jsonify({"error": "Falta el parámetro 'id'"}), 400

    update_response = supabase.table("Citas").update({"estado": True}).eq("id", id_cita).execute()
    if update_response.error:
        return jsonify({"error": str(update_response.error)}), 500

    return jsonify({"message": "Cita aprobada exitosamente"}), 200

@appointments_bp.route("/delete", methods=["DELETE"])
def delete_appointment():
    id_cita = request.args.get("id")
    if not id_cita:
        return jsonify({"error": "Falta el parámetro 'id'"}), 400

    delete_response = supabase.table("Citas").delete().eq("id", id_cita).execute()
    if delete_response.error:
        return jsonify({"error": str(delete_response.error)}), 500

    return jsonify({"message": "Cita eliminada exitosamente"}), 200
