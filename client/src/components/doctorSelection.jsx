import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDoctor } from "../context/DoctorContext"; // Importa el contexto
import "../assets/doctorSelectionStyle.css";

const DoctorSelection = () => {
    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate();
    const { setDoctorId } = useDoctor(); // Usa el contexto

    useEffect(() => {
        fetch("http://localhost:5000/doctors/info")
            .then(response => response.json())
            .then(data => setDoctors(data))
            .catch(error => console.error("Error al obtener doctores:", error));
    }, []);

    const handleDoctorClick = (id) => {
        setDoctorId(id);
        navigate("/doctor/menu");
    };

    return (
        <div className="container">
            <h1 className="title">¿Qué Doctor eres?</h1>
            <div className="button-container">
                {doctors.map(doctor => (
                    <button 
                        key={doctor.id} 
                        className="btn doctor-btn" 
                        onClick={() => handleDoctorClick(doctor.id)}
                    >
                        {doctor.nombre}
                    </button>
                ))}
                <button className="btn back-btn" onClick={() => navigate(-1)}>Volver</button>
            </div>
        </div>
    );
};

export default DoctorSelection;
