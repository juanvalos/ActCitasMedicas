import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/doctorSelectionStyle.css";

const DoctorSelection = () => {
    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/doctors/info")
            .then(response => response.json())
            .then(data => setDoctors(data))
            .catch(error => console.error("Error al obtener doctores:", error));
    }, []);

    
    const handleDoctorClick = (id) => {
        navigate(`/doctor/${id}`);
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
            </div>
        </div>
    );
};

export default DoctorSelection;