import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePatient } from "../context/PatientContext";
import "../assets/consultasPatStyle.css";

const ConsultasPat = () => {
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();
    const { patientId } = usePatient(); 

    useEffect(() => {
        if (!patientId) {
            console.error("Error: ID del paciente no encontrado.");
            navigate("/patient-selection");
            return;
        }

        fetch(`http://localhost:5000/appointments/appointmentsPat?idPaciente=${patientId}`)
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setAppointments(data);
                } else {
                    console.error("No hay citas disponibles para este paciente.");
                    setAppointments([]);
                }
            })
            .catch(error => console.error("Error al obtener citas:", error));
    }, [patientId, navigate]);

    return (
        <div className="container">
            <h1 className="title">Mis Citas</h1>
            <div className="appointments-list">
                {appointments.length > 0 ? (
                    appointments.map((appointment) => (
                        <div key={appointment.id} className="appointment-card">
                            <h2>Motivo: {appointment.motivoConsulta}</h2>
                            <p>
                                <strong>Fecha:</strong> {new Date(appointment.fecha).toLocaleString()}
                            </p>
                            <p>
                                <strong>Estado:</strong> 
                                <span className={appointment.estado ? "confirmed" : "pending"}>
                                    {appointment.estado ? "Confirmada" : "Pendiente"}
                                </span>
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="no-appointments">No tienes citas registradas.</p>
                )}
            </div>
            <button className="btn back-btn" onClick={() => navigate(-1)}>Volver</button>
        </div>
    );
};

export default ConsultasPat;
