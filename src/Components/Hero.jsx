import React from "react";

const numero_telefono = "5493872238908";
const mensaje = "Hola! Quiero saber más sobre sus servicios.";

const Hero = () => {
  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${numero_telefono}&text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="container-hero">
      <div className="container-img">
        <div className="container-text">
          <div className="text-home">
            {" "}
            <h1>Somos fabricantes de aberturas en Salta</h1>
          </div>
          <div class="btn-hero" onClick={handleClick}>
            <spam>Presupuesto sin costo</spam>
          </div>
        </div>
      </div>

      <div className="cont-hero-two">
        <div className="cont-img-two"></div>
        <div className="cont-text-two">
          <div className="txt-home-two">
            {" "}
            <h1>Líderes en costos y plazos de entrega</h1>
            <p className="parrafo">
              Nos enorgullecemos de ofrecer los mejores precios del mercado y
              entregas en tiempo récord sin sacrificar la calidad y la atención
              al detalle.
            </p>
          </div>
          <div class="btn-hero-two" onClick={handleClick}>
            <spam>Más información</spam>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
