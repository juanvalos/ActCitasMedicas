import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/patientSelectionStyle.css";

const PatientSelection = () => {
    const [patients, setPatients] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/patients/info")
            .then(response => response.json())
            .then(data => setPatients(data))
            .catch(error => console.error("Error al obtener pacientes:", error));
    }, []);

    
    const handlePatientClick = (id) => {
        navigate(`/patient/${id}`);
    };

    return (
        <div className="container">
            <h1 className="title">¿Qué paciente eres?</h1>
            <div className="button-container">
                {patients.map(patient => (
                    <button 
                        key={patient.id} 
                        className="btn patient-btn" 
                        onClick={() => handlePatientClick(patient.id)}
                    >
                        {patient.nombre}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PatientSelection;