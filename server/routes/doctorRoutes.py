from flask import Blueprint, jsonify, request
from supabase_client import supabase

doctors_bp = Blueprint("Doctors", __name__)

@doctors_bp.route("/Info", methods = ["GET"])
def get_data():
    response = supabase.table("Doctores").select("*"). execute()
    return jsonify(response.data), 200