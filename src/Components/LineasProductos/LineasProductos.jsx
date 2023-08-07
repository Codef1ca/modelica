import React from "react";
import "../../App.css";
import LineaProductos from "./LineaProductos";

import premium1 from "../../Assets/premium1.png";
import premium2 from "../../Assets/premium2.png";
import premium3 from "../../Assets/premium3.png";

import intermedia1 from "../../Assets/Intermedia1.png";
import intermedia2 from "../../Assets/Intermedia2.png";
import intermedia3 from "../../Assets/Intermedia3.png";

import Vidrios1 from "../../Assets/vidrios1.png";
import Vidrios2 from "../../Assets/vidrios2.png";
import Vidrios3 from "../../Assets/vidrios3.png";

const urlsPremium = [
  [premium1, "HA 110"],
  [premium2, "HA 62"],
  [premium3, "Nordical"],
];
const urlsIntermedia = [
  [intermedia1, "Rotonda 640"],
  [intermedia2, "Modena"],
  [intermedia3, "L2200"],
];
const urlsVidrios = [[Vidrios1], [Vidrios2], [Vidrios3]];

const LineasProductos = () => {
  return (
    <div className="divLineasProductos">
      <div className="divTituloLineas">
        <h1 className="titulo">Líneas de Productos</h1>
      </div>
      <div>
        <LineaProductos
          subTitulo="Línea Premium"
          urlImagenes={urlsPremium}
        />
        <LineaProductos
          subTitulo="Línea Intermedia"
          urlImagenes={urlsIntermedia}
        />

        <LineaProductos
          subTitulo="Línea Vidrios"
          urlImagenes={urlsVidrios}
        />
      </div>
    </div>
  );
};

export default LineasProductos;
