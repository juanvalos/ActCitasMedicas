from flask import Blueprint, jsonify, request
from supabase_client import supabase

patients_bp = Blueprint("patients", __name__)

@patients_bp.route("/info", methods = ["GET"])
def getData():
    response = supabase.table("Pacientes").select("id, nombre, edad").execute()
    return jsonify(response.data), 200

@patients_bp.route("/names", methods = ["GET"])
def getNames():
    response = supabase.table("Pacientes").select("nombre").execute()
    return jsonify(response.data), 200


@patients_bp.route("/patId", methods=["GET"])
def get_patient_id():
    nombre = request.args.get("nombre")

    if not nombre:
        return jsonify({"error": "Falta el parámetro 'nombre'"}), 400

    response = supabase.table("Pacientes").select("id").eq("nombre", nombre).execute()

    if response.data:
        return jsonify(response.data[0]), 200
    else:
        return jsonify({"error": "Paciente no encontrado"}), 404

@patients_bp.route("/nameById", methods=["GET"])
def get_patient_name_by_id():
    id = request.args.get("id")

    if not id:
        return jsonify({"error": "Falta el parámetro 'id'"}), 400

    response = supabase.table("Pacientes").select("nombre").eq("id", id).execute()

    if response.data:
        return jsonify(response.data[0]), 200
    else:
        return jsonify({"error": "Paciente no encontrado"}), 404
