import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


const Boton = () => {
    return (
        <div className='divBoton'>
            <Link className='boton'>Todos los productos</Link>
        </div>
    );
};

export default Boton;