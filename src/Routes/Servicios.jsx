import React, { useEffect, useRef } from 'react';
import Navbar from "../Components/Navbar"
import LineasProductos from '../Components/LineasProductos/LineasProductos';
import LinkWhatsApp from '../Components/LineasProductos/LinkWhatsApp';

const Servicios = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);



    return (
        <div >
            <Navbar/>
            <LineasProductos/>
            <LinkWhatsApp/>
        </div>
    );
};

export default Servicios;