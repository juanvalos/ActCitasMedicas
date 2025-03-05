import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/medicalLoginStyle.css";

const MedicalLogin = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1 className="title">Sistema de Citas Médicas</h1>
            <div className="button-container">
                <button 
                    className="btn patient-btn" 
                    onClick={() => navigate("/patient-selection")}
                >
                    Ingresar como Paciente
                </button>
                <button 
                    className="btn doctor-btn"
                    onClick={() => navigate("/doctor-selection")}
                >
                    Ingresar como Doctor
                </button>
    
            </div>
        </div>
    );
};

export default MedicalLogin;
