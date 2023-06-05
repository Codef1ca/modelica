import "./../App.css";
import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { json } from "react-router-dom";

const FormContacto = () => {
  // const [nombre, setNombre] = useState("");
  // const [apellido, setApellido] = useState("");
  // const [email, setEmail] = useState("");
  // const [telefono, setTelefono] = useState("");
  // const [direccion, setDireccion] = useState("");
  // const [asunto, setAsunto] = useState("");
  // const [mensaje, setMensaje] = useState("");

  const formData = {
    nombre: undefined,
    apellido: undefined,
    email: undefined,
    telefono: undefined,
    direccion: undefined,
    asunto: undefined,
    mensaje: undefined,
  };

  const [formValue, setFormValue] = useState(formData);

  function handleChange(event) {
    const input = event.target;
    const thisCampo = input.id;
    const prevFormData = { ...formValue };
    prevFormData[thisCampo] = input.value;
    setFormValue(prevFormData);
  }

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xy25uef",
        "template_g5aic4j",
        form.current,
        "9i2UOEfdwm6w4xyOF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // El siguiente código lo deja en un JSON
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

  //   //restablecemos a "" todos los inputs
  //   setNombre("");
  //   setApellido("");
  //   setEmail("");
  //   setTelefono("");
  //   setDireccion("");
  //   setAsunto("");
  //   setMensaje("");
  // };

  return (
    <div class="containerContactForm">
      <div>{JSON.stringify(formValue)}</div>

      <div class="contentContactForm">
        <div class="left-content">
          <div className="h1Form">
            <h1>Pedí tu presupuesto</h1>
          </div>
          <div className="cuerpoForm">
            <h2>
              Llena el formulario o llamanos para una consulta a domicilio.
            </h2>
            <p>
              <strong>Zonas de Servicio:</strong>
            </p>
            <p>Salta, Argentina.</p>

            <p>Alejandro Gallardo esq. Av. Juventud, 4400 - Salta, Argentina</p>
            <p>ventas@modelica.com.ar</p>
            <p>+54 9 387 223-8908 /678</p>
          </div>
        </div>

        <div class="right-content">
          <form ref={form} onSubmit={sendEmail} >
          {/* <form> */}
            <div class="form-row">
              <div class="form-group">
                <label className="formLabels" for="nombre">
                  Nombre
                </label>
                <input
                  className="inputForm"
                  type="text"
                  id="nombre"
                  name="from_name"
                  // value={nombre}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group">
                <label className="formLabels" for="apellido">
                  Apellido
                </label>
                <input
                  className="inputForm"
                  type="text"
                  id="apellido"
                  name="apellido"
                  // value={apellido}
                  onChange={handleChange}
                />
              </div>
            </div>

            <label className="formLabels" for="email">
              Email
            </label>
            <input
              className="inputForm"
              type="email"
              id="email"
              name="to_name"
              // value={email}
              onChange={handleChange}
            />

            <label className="formLabels" for="telefono">
              Teléfono
            </label>
            <input
              className="inputForm"
              type="tel"
              id="telefono"
              name="telefono"
              // value={telefono}
              onChange={handleChange}
            />
            <label className="formLabels" for="direccion">
              Dirección
            </label>
            <input
              className="inputForm"
              type="text"
              id="direccion"
              name="direccion"
              // value={direccion}
              onChange={handleChange}
            />
            <label className="formLabels" for="asunto">
              Asunto
            </label>
            <input
              className="inputForm"
              type="text"
              id="asunto"
              name="asunto"
              // value={asunto}
              onChange={handleChange}
            />
            <label className="formLabels" for="mensaje">
              Escribe tu mensaje aquí...
            </label>
            <textarea
              className="formTextArea"
              name="message"
              id="mensaje"
              rows="4"
              // value={mensaje}
              onChange={handleChange}
            ></textarea>
            <button className="formButtonSubmit" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContacto;
