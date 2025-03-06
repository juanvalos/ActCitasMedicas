from flask import Blueprint, jsonify, request
from dao.supabase_client import supabase

doctors_bp = Blueprint("doctors", __name__)

@doctors_bp.route("/info", methods=["GET"])
def getData():
    response = supabase.table("Doctores").select("id, nombre, contacto, especialidad").execute()
    return jsonify(response.data), 200

@doctors_bp.route("/names", methods=["GET"])
def getNames():
    response = supabase.table("Doctores").select("nombre").execute()
    return jsonify(response.data), 200

@doctors_bp.route("/docId", methods=["GET"])
def get_doctor_id():
    nombre = request.args.get("nombre")
    if not nombre:
        return jsonify({"error": "Falta el parámetro 'nombre'"}), 400

    response = supabase.table("Doctores").select("id").eq("nombre", nombre).execute()
    if response.data:
        return jsonify(response.data[0]), 200
    else:
        return jsonify({"error": "Doctor no encontrado"}), 404

@doctors_bp.route("/nameById", methods=["GET"])
def get_doctor_name_by_id():
    id = request.args.get("id")
    if not id:
        return jsonify({"error": "Falta el parámetro 'id'"}), 400

    response = supabase.table("Doctores").select("nombre").eq("id", id).execute()
    if response.data:
        return jsonify(response.data[0]), 200
    else:
        return jsonify({"error": "Doctor no encontrado"}), 404
