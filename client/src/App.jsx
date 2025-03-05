import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MedicalLogin from "./components/medicalLogin";
import PatientSelection from "./components/patientSelection";
import DoctorSelection from "./components/doctorSelection";
function App() {
    return (
        <Routes>
            <Route path="/" element={<MedicalLogin />} />
            <Route path="/patient-selection" element={<PatientSelection />} />
            <Route path="/doctor-selection" element={<DoctorSelection />} />
        </Routes>
    );
}

export default App;
