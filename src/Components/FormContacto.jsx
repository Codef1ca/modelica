import "./../App.css";
import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const FormContacto = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Crear un objeto para almacenar los datos capturados
    const formData = {
      nombre,
      apellido,
      email,
      telefono,
      direccion,
      asunto,
      mensaje,
    };
    console.log("Datos capturados:", formData);

    //restablecemos a "" todos los inputs
    setNombre("");
    setApellido("");
    setEmail("");
    setTelefono("");
    setDireccion("");
    setAsunto("");
    setMensaje("");
  };

  return (
    <div class="containerContactForm">
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
          <form ref={form} onSubmit={sendEmail}>
            <div class="form-row">
              <div class="form-group">
                <label className="formLabels" for="nombre">
                  Nombre
                </label>
                <input
                  className="inputForm"
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
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
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
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
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="formLabels" for="telefono">
              Teléfono
            </label>
            <input
              className="inputForm"
              type="tel"
              id="telefono"
              name="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
            <label className="formLabels" for="direccion">
              Dirección
            </label>
            <input
              className="inputForm"
              type="text"
              id="direccion"
              name="direccion"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
            <label className="formLabels" for="asunto">
              Asunto
            </label>
            <input
              className="inputForm"
              type="text"
              id="asunto"
              name="asunto"
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
            />
            <label className="formLabels" for="mensaje">
              Escribe tu mensaje aquí...
            </label>
            <textarea
              className="formTextArea"
              name="mensaje"
              id="mensaje"
              rows="4"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
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
