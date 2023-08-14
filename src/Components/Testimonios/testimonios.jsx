import React from "react";
import Testimonio from "./testimonio";
import "../../App.css";

const Testimonios = () => {
  return (
    <div className="divTestimonio">
      <div className="divTitulo">
        <h1 className="titulo">Clientes Satisfechos</h1>
      </div>
      <div className="divDescTestimonio">
        <Testimonio
          descripcion={
            "Estoy muy conforme con el trabajo, la carpintería hace juego con el amobalmiento y el servicio post venta fue excelente"
          }
          nombre={"Francisco Álvarez"}
        />
        <Testimonio
          descripcion={
            "Me gusta la terminación de las ventanas, los vidrios DVH fueron una solución para la aislación de calor que estaba buscando en mi hogar."
          }
          nombre={"Santiago San Miguel"}
        />
        <Testimonio
          descripcion={
            "Los tiempos de entrega fueron los esperados, tuvimos problemas con la albañilería en relación a tiempos de construcción pero no fue problema para el servicio de carpintería ya que fueron pacientes con nostros"
          }
          nombre={"Lucas Dib Ashur"}
        />
      </div>
    </div>
  );
};

export default Testimonios;
