import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/doctorMenuStyle.css";

const DoctorMenu = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1 className="title">Menú del Doctor</h1>
            <div className="button-container">
                <button 
                    className="btn consult-btn" 
                    onClick={() => navigate("/doctor/appointments")}
                >
                    Consultar Citas Pendientes
                </button>
                <button 
                    className="btn schedule-btn" 
                    onClick={() => navigate("/doctor/scheduled")}
                >
                    Citas Programadas
                </button>
                <button className="btn back-btn" onClick={() => navigate(-1)}>Volver</button>
            </div>
        </div>
    );
};

export default DoctorMenu;
