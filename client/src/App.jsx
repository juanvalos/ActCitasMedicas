import React from "react";
import { Routes, Route } from "react-router-dom";
import { PatientProvider } from "./context/PatientContext";
import { DoctorProvider } from "./context/DoctorContext"; 

import MedicalLogin from "./components/MedicalLogin";
import PatientSelection from "./components/PatientSelection";
import PatientMenu from "./components/PatientMenu";
import DoctorSelection from "./components/DoctorSelection";
import DoctorMenu from "./components/DoctorMenu";
import DoctorSelectionPat from "./components/DoctorSelectionPat";
import PatAgendarCita from "./components/PatAgendarCita";
import ConsultasPat from "./components/consultasPat";
import GestionarCitas from "./components/GestionarCitas";
import ScheduledAppointments from "./components/ScheduledAppointments";

function App() {
    return (
        <PatientProvider> 
            <DoctorProvider>
                <Routes>
                    <Route path="/" element={<MedicalLogin />} />

                    <Route path="/patient-selection" element={<PatientSelection />} />

                    <Route path="/patient/menu" element={<PatientMenu />} />

                    <Route path="/doctor-selection" element={<DoctorSelection />} />

                    <Route path="/doctor/menu" element={<DoctorMenu />} />

                    <Route path="/doctor/selectionPat" element = {<DoctorSelectionPat />} />

                    <Route path="/schedule-appointment" element = {<PatAgendarCita />} />

                    <Route path="/patient/appointments" element = {<ConsultasPat />} />

                    <Route path="manage-appointments" element = {<GestionarCitas />} />
                    
                    <Route path="/doctor/scheduled" element={<ScheduledAppointments />} />

                </Routes>
            </DoctorProvider>
        </PatientProvider>
    );
}

export default App;
