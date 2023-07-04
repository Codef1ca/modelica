import React from "react";
import Tarjeta from "./tarjeta";

const Benefits = () => {
  return (
    <div className="beneficios">
      <div className="divTitulo">
        <hi className="titulo">¿Por qué elegirnos?</hi>
      </div>
      <div className="tarjetas">
        <Tarjeta
          titulo={"Financiamiento accesible"}
          descripcion={
            "Hasta 12 y 24 cuotas sin interés y pagos contra entrega"
          }
        />
        <Tarjeta
          titulo={"Cumplimiento de plazos y entregas"}
          descripcion={
            "Realizamos un seguimiento del pedido para que se cumplan las entregas en obra"
          }
        />
        <Tarjeta
          titulo={"Servicio Postventa"}
          descripcion={
            "Contamos con un equipo postventa para prevenir inconvenientes luego de la colocación"
          }
        />
        <Tarjeta
          titulo={"Calidad en materiales de fabricación"}
          descripcion={
            "Trabajamos con las mejores marcas de aluminio de marca nacional e internacional."
          }
        />
      </div>
    </div>
  );
};

export default Benefits;
