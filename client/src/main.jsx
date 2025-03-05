import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { PatientProvider } from "./context/PatientContext";
import { DoctorProvider } from "./context/DoctorContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PatientProvider>
        <DoctorProvider>
          <App />
        </DoctorProvider>
      </PatientProvider>
    </BrowserRouter>
  </React.StrictMode>
);