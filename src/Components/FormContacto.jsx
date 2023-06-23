import "./../App.css";
import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { json } from "react-router-dom";

const FormContacto = ({ estilo }) => {
  const formData = {
    nombre: undefined,
    apellido: undefined,
    email: undefined,
    telefono: undefined,
    direccion: undefined,
    asunto: undefined,
    mensaje: undefined,
  };

  let addEstiloForm;
  if (estilo == "blanco") {
    addEstiloForm = "_blanco";
  } else {
    addEstiloForm = "_negro";
  }

  const [formValue, setFormValue] = useState(formData);

  function handleChange(event) {
    const input = event.target;
    const thisCampo = input.id;
    const prevFormData = { ...formValue };
    prevFormData[thisCampo] = input.value;
    setFormValue(prevFormData);
  }

  //EmailJS:
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLICKEY
      )
      .then(
        (result) => {
          console.log(result.text);
          // Restablecer los valores de los inputs a ""
          const formInputs = form.current.elements;
          for (let i = 0; i < formInputs.length; i++) {
            if (
              formInputs[i].nodeName === "INPUT" ||
              formInputs[i].nodeName === "TEXTAREA"
            ) {
              formInputs[i].value = "";
            }
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    //restablecemos a "" ek los inputs
    setFormValue(formData);
  };

  // Aux: El siguiente código lo deja en un JSON
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Crear un objeto para almacenar los datos capturados
  //   const formData = {
  //     nombre,
  //     apellido,
  //     email,
  //     telefono,
  //     direccion,
  //     asunto,
  //     mensaje,
  //   };
  //   console.log("Datos capturados:", formData);
  // };

  return (
    <div class={"containerContactForm" + addEstiloForm}>
      <div class="contentContactForm">
        <div class="left-content">
          <div className={"h1Form" + addEstiloForm}>
            <h1>Pedí tu presupuesto</h1>
          </div>
          <div className={"cuerpoForm" + addEstiloForm}>
            <h2>
              Llena el formulario o llamanos para una consulta a domicilio.
            </h2>
            <p>
              <strong>Zonas de Servicio:</strong>
            </p>
            <p>Salta, Argentina.</p>

            <p>Alejandro Gallardo esq. Av. Juventud, 4400 - Salta, Argentina</p>
            <p>ventas@modelica.com.ar</p>
            <p>+54 9 387 223-8908</p>
          </div>
        </div>

        <div class="right-content">
          <form ref={form} onSubmit={sendEmail}>
            <div class="form-row">
              <div class="form-group">
                <label className="formLabels" for="nombre">
                  Nombre
                </label>
                <input
                  className={"inputForm" + addEstiloForm}
                  type="text"
                  id="nombre"
                  name="nombre"
                  onChange={handleChange}
                />
              </div>
              <div class="form-group">
                <label className="formLabels" for="apellido">
                  Apellido
                </label>
                <input
                  className={"inputForm" + addEstiloForm}
                  type="text"
                  id="apellido"
                  name="apellido"
                  onChange={handleChange}
                />
              </div>
            </div>

            <label className="formLabels" for="email">
              Email
            </label>
            <input
              className={"inputForm" + addEstiloForm}
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
            />

            <label className="formLabels" for="telefono">
              Teléfono
            </label>
            <input
              className={"inputForm" + addEstiloForm}
              type="tel"
              id="telefono"
              name="telefono"
              onChange={handleChange}
            />

            <label className="formLabels" for="direccion">
              Dirección
            </label>
            <input
              className={"inputForm" + addEstiloForm}
              type="text"
              id="direccion"
              name="direccion"
              onChange={handleChange}
            />

            <label className="formLabels" for="asunto">
              Asunto
            </label>
            <input
              className={"inputForm" + addEstiloForm}
              type="text"
              id="asunto"
              name="asunto"
              onChange={handleChange}
            />

            <label className="formLabels" for="mensaje">
              Escribe tu mensaje aquí...
            </label>
            <textarea
              className={"formTextArea" + addEstiloForm}
              id="mensaje"
              name="mensaje"
              rows="4"
              onChange={handleChange}
            ></textarea>

            <button
              className={"formButtonSubmit" + addEstiloForm}
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContacto;
