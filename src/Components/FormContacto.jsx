import "./../App.css";
import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { json } from "react-router-dom";

const FormContacto = ({ estilo }) => {
  const formData = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    asunto: "",
    mensaje: "",
  };

  let addEstiloForm;
  if (estilo === "blanco") {
    addEstiloForm = "_blanco";
  } else {
    addEstiloForm = "_negro";
  }

  const [formValue, setFormValue] = useState(formData);
  const [formErrors, setFormErrors] = useState({});

  function handleChange(event) {
    const input = event.target;
    const thisCampo = input.id;
    const prevFormData = { ...formValue };
    prevFormData[thisCampo] = input.value;
    setFormValue(prevFormData);
  }

  function validateForm() {
    const telefonoPattern = /^[0-9+#-]*$/;
    const errors = {};

    if (!formValue.telefono.match(telefonoPattern)) {
      errors.telefono = "El teléfono solo puede contener números y símbolos especiales";
    }

    return errors;
  }

  function sendEmail(event) {
    event.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE,
          process.env.REACT_APP_EMAILJS_TEMPLATE,
          event.target,
          process.env.REACT_APP_EMAILJS_PUBLICKEY
        )
        .then(
          (result) => {
            console.log(result.text);
            // Restablecer los valores de los inputs a ""
            const formInputs = event.target.elements;
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

      setFormValue(formData);
    } else {
      console.log(errors);
      setFormErrors(errors);
    }
  }

  return (
    <div className={"containerContactForm" + addEstiloForm}>
      <div className="contentContactForm">
        <div className="left-content">
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

        <div className="right-content">
          <form onSubmit={sendEmail}>
            <div className="form-row">
              <div className="form-group">
                <label className="formLabels" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  className={"inputForm" + addEstiloForm}
                  type="text"
                  id="nombre"
                  name="nombre"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="formLabels" htmlFor="apellido">
                  Apellido
                </label>
                <input
                  className={"inputForm" + addEstiloForm}
                  type="text"
                  id="apellido"
                  name="apellido"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <label className="formLabels" htmlFor="email">
              Email
            </label>
            <input
              className={"inputForm" + addEstiloForm}
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              required
            />

            <label className="formLabels" htmlFor="telefono">
              Teléfono
            </label>
            <input
              className={"inputForm" + addEstiloForm}
              type="tel"
              id="telefono"
              name="telefono"
              onChange={handleChange}
              pattern="[0-9+#-]*"
              required
            />
            {formErrors.telefono && (
              <span className="error-message">{formErrors.telefono}</span>
            )}

            <label className="formLabels" htmlFor="direccion">
              Dirección
            </label>
            <input
              className={"inputForm" + addEstiloForm}
              type="text"
              id="direccion"
              name="direccion"
              onChange={handleChange}
            />

            <label className="formLabels" htmlFor="asunto">
              Asunto
            </label>
            <input
              className={"inputForm" + addEstiloForm}
              type="text"
              id="asunto"
              name="asunto"
              onChange={handleChange}
            />

            <label className="formLabels" htmlFor="mensaje">
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
