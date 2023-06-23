import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "../../App.css";

const BotonSecundario = ({ bkColor }) => {
  return (
    <div className="divBoton">
      <a
        className="botonSecundario"
        href="https://api.whatsapp.com/send?phone=5493872238908&text=Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20sus%20servicios."
        target="_blank"
        rel="noopener noreferrer"
      >
        Presupuesto sin costo
      </a>
    </div>
  );
};

export default BotonSecundario;
