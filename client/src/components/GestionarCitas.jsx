import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDoctor } from "../context/DoctorContext"; // Contexto del doctor
import "../assets/GestionarCitasStyle.css"; // Importar estilos

const GestionarCitas = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();
  const { doctorId } = useDoctor();

  useEffect(() => {
    if (!doctorId) {
      console.error("Error: ID del doctor no encontrado.");
      navigate("/doctor-selection"); 
      return;
    }

    fetch(`http://localhost:5000/appointments/pendingDoc?idDoctor=${doctorId}`)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setAppointments(data);
        } else {
          console.error("No hay citas pendientes.");
          setAppointments([]);
        }
      })
      .catch(error => console.error("Error al obtener citas:", error));
  }, [doctorId, navigate]);

  const handleAcceptAppointment = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/appointments/approve?id=${id}`, {
        method: "PUT"
      });
      const data = await response.json();
      if (response.ok && data.message) {
        alert("Cita aceptada exitosamente");
        navigate("/doctor/menu");
      } else {
        alert("Error al aceptar la cita: " + (data.error || "Error desconocido"));
      }
    } catch (error) {
      console.error("Error al aprobar cita:", error);
    }
  };

  const handleDeleteAppointment = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/appointments/delete?id=${id}`, {
        method: "DELETE"
      });
      const data = await response.json();
      if (response.ok && data.message) {
        alert("Cita rechazada");
        setAppointments(appointments.filter(appointment => appointment.id !== id));
      } else {
        alert("Error al rechazar la cita: " + (data.error || "Error desconocido"));
      }
    } catch (error) {
      console.error("Error al eliminar cita:", error);
      alert("Error al eliminar cita: " + error.message);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Citas Pendientes</h1>
      <div className="appointments-list">
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <div key={appointment.id} className="appointment-card">
              <h2>Motivo: {appointment.motivoConsulta}</h2>
              <p>
                <strong>Fecha:</strong> {new Date(appointment.fecha).toLocaleString()}
              </p>
              <p>
                <strong>Estado:</strong> <span className="pending">Pendiente</span>
              </p>
              <div className="button-group">
                <button 
                  className="btn accept-btn" 
                  onClick={() => handleAcceptAppointment(appointment.id)}
                >
                  Aceptar Cita
                </button>
                <button 
                  className="btn delete-btn" 
                  onClick={() => handleDeleteAppointment(appointment.id)}
                >
                  Eliminar Cita
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-appointments">No tienes citas pendientes.</p>
        )}
      </div>
      <button className="btn back-btn" onClick={() => navigate(-1)}>
        Volver
      </button>
    </div>
  );
};

export default GestionarCitas;
