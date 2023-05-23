import React from "react";
import '../../App.css'

function Tarjeta({titulo, descripcion}) {
    return (
      <div className="divTarjeta">
        <div className="divTituloTarjeta">
            <h3 className="tituloTarjeta">
                {titulo}
            </h3>
        </div>
        <div className="divDescripcion">
            <p className="descripcion">
                {descripcion}
            </p>
        </div>
    </div>
    
      
    )
  }
  
  export default Tarjeta
  