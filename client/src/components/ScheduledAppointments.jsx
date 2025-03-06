import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDoctor } from "../context/DoctorContext";
import "../assets/ScheduledAppointmentsStyle.css";

const ScheduledAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();
  const { doctorId } = useDoctor();

  useEffect(() => {
    if (!doctorId) {
      console.error("Error: ID del doctor no encontrado.");
      navigate("/doctor-selection");
      return;
    }

    fetch(`http://localhost:5000/appointments/approved?idDoctor=${doctorId}`)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setAppointments(data);
        } else {
          console.error("No hay citas aprobadas.");
          setAppointments([]);
        }
      })
      .catch(error => console.error("Error al obtener citas:", error));
  }, [doctorId, navigate]);

  return (
    <div className="container">
      <h1 className="title">Citas Programadas</h1>
      <div className="appointments-list">
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <div key={appointment.id} className="appointment-card">
              <h2>Motivo: {appointment.motivoConsulta}</h2>
              <p>
                <strong>Fecha:</strong>{" "}
                {new Date(appointment.fecha).toLocaleString()}
              </p>
              <p>
                <strong>Estado:</strong>{" "}
                <span className="approved">Aprobada</span>
              </p>
            </div>
          ))
        ) : (
          <p className="no-appointments">No hay citas programadas.</p>
        )}
      </div>
      <button className="btn back-btn" onClick={() => navigate(-1)}>
        Volver
      </button>
    </div>
  );
};

export default ScheduledAppointments;
