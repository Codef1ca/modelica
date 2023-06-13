import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import '../../App.css'


const BotonSecundario = ({bkColor}) => {
    return (
        <div className='divBoton'>
            <a className='botonSecundario' href="https://api.whatsapp.com/send?phone=543872238907&text=Hola!%20Vi%20la%20p%C3%A1gina%20web%20de%20Mod%C3%A9lica%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20aberturas." target="_blank" rel="noopener noreferrer" >Presupuesto sin costo</a>
        </div>
    );
};

export default BotonSecundario;