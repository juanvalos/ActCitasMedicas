import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/patientMenuStyle.css";

const PatientMenu = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1 className="title">Menú del Paciente</h1>
            <div className="button-container">
                <button 
                    className="btn consult-btn" 
                    onClick={() => navigate("/patient/appointments")}
                >
                    Consultar Citas
                </button>
                <button 
                    className="btn schedule-btn" 
                    onClick={() => navigate("/doctor/selectionPat")}
                >
                    Agendar Cita
                </button>
                <button className="btn back-btn" onClick={() => navigate(-1)}>Volver</button>
            </div>
        </div>
    );
};

export default PatientMenu;
