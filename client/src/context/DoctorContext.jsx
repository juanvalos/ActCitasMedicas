import React, { createContext, useContext, useState } from "react";

const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
    const [doctorId, setDoctorId] = useState(null); // Inicializa como null

    return (
        <DoctorContext.Provider value={{ doctorId, setDoctorId }}>
            {children}
        </DoctorContext.Provider>
    );
};

export const useDoctor = () => {
    return useContext(DoctorContext);
};
