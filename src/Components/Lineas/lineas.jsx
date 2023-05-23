import React from 'react';
import '../../App.css'
import Linea from './linea';
import Boton from './Boton';

const Lineas = () => {
    return (
        <div className='lineas'>
            <div className='tituloLineas'>
                <h2>
                    Nuestra línea de productos
                </h2>
            </div>
            <div className='lineasImagen'>
                <Linea url={"https://static.wixstatic.com/media/1f2918_58d72decab8349af9c9eb381ffefe8dc~mv2.jpg/v1/fill/w_383,h_908,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1f2918_58d72decab8349af9c9eb381ffefe8dc~mv2.jpg"} texto={"Lineas premium"}/>
                <Linea url={"https://static.wixstatic.com/media/1f2918_a8b153da07e54523a3ef3250eb75bb6c~mv2.jpg/v1/fill/w_378,h_908,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1f2918_a8b153da07e54523a3ef3250eb75bb6c~mv2.jpg"} texto={"Lineas intermedias"}/>
                <Linea url={"https://static.wixstatic.com/media/1f2918_095922e4b9a844aa9ff454d5e6d4db4e~mv2.jpg/v1/fill/w_378,h_908,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1f2918_095922e4b9a844aa9ff454d5e6d4db4e~mv2.jpg"} texto={"Lineas básicas"}/>


{/*                 <img src="https://static.wixstatic.com/media/1f2918_58d72decab8349af9c9eb381ffefe8dc~mv2.jpg/v1/fill/w_383,h_908,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1f2918_58d72decab8349af9c9eb381ffefe8dc~mv2.jpg" className='imagenLinea'/>
                <img src="https://static.wixstatic.com/media/1f2918_a8b153da07e54523a3ef3250eb75bb6c~mv2.jpg/v1/fill/w_378,h_908,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1f2918_a8b153da07e54523a3ef3250eb75bb6c~mv2.jpg" className='imagenLinea'/>
                <img src="https://static.wixstatic.com/media/1f2918_095922e4b9a844aa9ff454d5e6d4db4e~mv2.jpg/v1/fill/w_378,h_908,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1f2918_095922e4b9a844aa9ff454d5e6d4db4e~mv2.jpg" className='imagenLinea'/> */}
            </div>
            <div className='lineasBoton'>
                <Boton/>
            </div>
        </div>
    );
};

export default Lineas;