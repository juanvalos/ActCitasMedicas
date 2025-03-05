import React from "react";
import { Routes, Route } from "react-router-dom";
import { PatientProvider } from "./context/PatientContext"; // Contexto de pacientes
import { DoctorProvider } from "./context/DoctorContext"; // Contexto de doctores

import MedicalLogin from "./components/MedicalLogin";
import PatientSelection from "./components/PatientSelection";
import PatientMenu from "./components/PatientMenu";
import DoctorSelection from "./components/DoctorSelection";
import DoctorMenu from "./components/DoctorMenu";
import DoctorSelectionPat from "./components/DoctorSelectionPat";
import PatAgendarCita from "./components/PatAgendarCita";

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

                </Routes>
            </DoctorProvider>
        </PatientProvider>
    );
}

export default App;
