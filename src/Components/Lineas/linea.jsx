import React, {useState, useEffect} from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Linea = ({url, texto}) => {
    /* const estilo = {backgroundImage: \'{url}\'} */
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        // Obtiene las dimensiones de la imagen
        const img = new Image();
        img.src = url;
        img.onload = () => {
          setImageSize({ width: img.width, height: img.height });
        };
      }, [url]);

    return (
        <div style={{ backgroundImage: `url(${url})`}} className='imagenLinea'>
            <div className='text-overlay'><Link className='descLinea' to='/Servicios'>{texto}</Link></div>
            
        </div>
    );
};

export default Linea;