import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDoctor } from "../context/DoctorContext";
import "../assets/doctorSelectionStylePat.css";

const DoctorSelectionPat = () => {
    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate();
    const { setDoctorId } = useDoctor();

    useEffect(() => {
        fetch("http://localhost:5000/doctors/info")
            .then(response => response.json())
            .then(data => setDoctors(data))
            .catch(error => console.error("Error al obtener doctores:", error));
    }, []);

    const handleDoctorClick = (id) => {
        setDoctorId(id);
        navigate("/schedule-appointment");
    };

    return (
        <div className="container">
            <h1 className="title">¿Con qué doctor quieres agendar cita?</h1>
            <div className="doctor-list">
                {doctors.map(doctor => (
                    <div key={doctor.id} className="doctor-card">
                        <h2>{doctor.nombre}</h2>
                        <p><strong>Especialidad:</strong> {doctor.especialidad}</p>
                        <p><strong>Contacto:</strong> {doctor.contacto}</p>
                        <button 
                            className="btn select-btn" 
                            onClick={() => handleDoctorClick(doctor.id)}
                        >
                            Seleccionar Doctor
                        </button>
                    </div>
                ))}
            </div>
            <button className="btn back-btn" onClick={() => navigate(-1)}>Volver</button>
        </div>
    );
};

export default DoctorSelectionPat;
