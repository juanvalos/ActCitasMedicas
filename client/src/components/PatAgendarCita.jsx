import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePatient } from "../context/PatientContext";
import { useDoctor } from "../context/DoctorContext";
import "../assets/PatAgendarCita.css";

const PatAgendarCita = () => {
    const { patientId } = usePatient();
    const { doctorId } = useDoctor();
    const navigate = useNavigate();
    
    const [patientName, setPatientName] = useState("");
    const [doctorName, setDoctorName] = useState("");
    const [motivoConsulta, setMotivoConsulta] = useState("");
    const [fecha, setFecha] = useState("");

    useEffect(() => {
        
        fetch(`http://localhost:5000/patients/nameById?id=${patientId}`)
            .then(response => response.json())
            .then(data => setPatientName(data.nombre))
            .catch(error => console.error("Error al obtener nombre del paciente:", error));
        
        fetch(`http://localhost:5000/doctors/nameById?id=${doctorId}`)
            .then(response => response.json())
            .then(data => setDoctorName(data.nombre))
            .catch(error => console.error("Error al obtener nombre del doctor:", error));
    }, [patientId, doctorId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const appointmentData = {
            motivoConsulta,
            idDoctor: doctorId,
            fecha,
            idPaciente: patientId
        };
        
        fetch("http://localhost:5000/appointments/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(appointmentData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                alert("Cita creada exitosamente");
                navigate("/patient/menu");
            } else {
                alert("Error al crear la cita: " + data.error);
            }
        })
        .catch(error => console.error("Error al crear cita:", error));
    };

    return (
        <div className="container">
            <h1 className="title">Agendar Cita</h1>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="form-group">
                    <label>Paciente:</label>
                    <input type="text" value={patientName} disabled />
                </div>
                <div className="form-group">
                    <label>Doctor:</label>
                    <input type="text" value={doctorName} disabled />
                </div>
                <div className="form-group">
                    <label>Motivo de Consulta:</label>
                    <input 
                        type="text" 
                        value={motivoConsulta} 
                        onChange={(e) => setMotivoConsulta(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Fecha:</label>
                    <input 
                        type="datetime-local" 
                        value={fecha} 
                        onChange={(e) => setFecha(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="btn submit-btn">Agendar</button>
                <button className="btn back-btn" onClick={() => navigate(-1)}>Volver</button>
            </form>
        </div>
    );
};

export default PatAgendarCita;