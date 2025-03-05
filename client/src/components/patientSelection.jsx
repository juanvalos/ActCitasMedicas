import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePatient } from "../context/PatientContext";
import "../assets/patientSelectionStyle.css";

const PatientSelection = () => {
    const [patients, setPatients] = useState([]);
    const navigate = useNavigate();
    const { setPatientId } = usePatient(); // Guarda el ID en el contexto

    useEffect(() => {
        fetch("http://localhost:5000/patients/info")
            .then(response => response.json())
            .then(data => setPatients(data))
            .catch(error => console.error("Error al obtener pacientes:", error));
    }, []);

    const handlePatientClick = (id) => {
        console.log("Seleccionado patientId:", id); // ✅ Verifica en consola
        setPatientId(id);
        navigate("/patient/menu");
    };

    return (
        <div className="container">
            <h1 className="title">Selecciona tu perfil</h1>
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
                <button className="btn back-btn" onClick={() => navigate(-1)}>Volver</button>
            </div>
        </div>
    );
};

export default PatientSelection;
