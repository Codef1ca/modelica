import React from 'react';
import Navbar from "../Components/Navbar"
import LineasProductos from '../Components/LineasProductos/LineasProductos';
import LinkWhatsApp from '../Components/LineasProductos/LinkWhatsApp';

const Servicios = () => {
    return (
        <div>
            <Navbar/>
            <LineasProductos/>
            <LinkWhatsApp/>
        </div>
    );
};

export default Servicios;