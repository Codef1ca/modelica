import React from 'react';
import '../../App.css'
import BotonSecundario from "./BotonSecundario"

const LinkWhatsApp = () => {
    return (
        <div className='divLinkWPP'>
            <div className='divTituloLinkWPP'>
                <h2 className='tituloLinkWPP'>Diseñá la casa de tus sueños. Hablanos de tu proyecto.</h2>
            </div>
            <div className='divBotonLinkWPP'>
                <BotonSecundario />
            </div>
        </div>
    );
};

export default LinkWhatsApp;