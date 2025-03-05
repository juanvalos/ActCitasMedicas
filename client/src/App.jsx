import React from "react";
import { Routes, Route } from "react-router-dom";
import { PatientProvider } from "./context/PatientContext"; // Contexto de pacientes
import { DoctorProvider } from "./context/DoctorContext"; // Contexto de doctores

import MedicalLogin from "./components/MedicalLogin";
import PatientSelection from "./components/PatientSelection";
import DoctorSelection from "./components/DoctorSelection";

function App() {
    return (
        <PatientProvider>
            <DoctorProvider>
                <Routes>
                    <Route path="/" element={<MedicalLogin />} />

                    <Route path="/patient-selection" element={<PatientSelection />} />

                    <Route path="/doctor-selection" element={<DoctorSelection />} />

                </Routes>
            </DoctorProvider>
        </PatientProvider>
    );
}

export default App;
