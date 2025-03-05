import React, { createContext, useContext, useState } from "react";

const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
    const [patientId, setPatientId] = useState(null); // Inicializa como null

    return (
        <PatientContext.Provider value={{ patientId, setPatientId }}>
            {children}
        </PatientContext.Provider>
    );
};

export const usePatient = () => {
    return useContext(PatientContext);
};
