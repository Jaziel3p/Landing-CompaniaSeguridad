import { useState } from "react";
import React from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { ssrDynamicImportKey } from "vite/runtime";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [cargando, setCargando] = useState(false);

  const clearState = (e) => {
    e.target.elements.name.value = "";
    e.target.elements.email.value = "";
    e.target.elements.message.value = "";
  };

  const handleSubmit = (e) => {
    setCargando(true);
    e.preventDefault();
    // Obtener los valores de los campos del formulario
    const nombre = e.target.elements.name.value;
    const correo = e.target.elements.email.value;
    const mensaje = e.target.elements.message.value;
    const telefono = e.target.elements.phone_number.value;
    //Cambiar estos datos para cada pagina y su respectivo contacto
    const nombreProp = "Ciudad Segura";
    const correoProp = "contacto@seguridadalfonso13.com";
    const pagina = "www.ciudadsegura.com";

    // Crear un objeto con los datos a enviar
    const data = {
      nombre,
      correo,
      mensaje,
      telefono,
      nombreProp,
      correoProp,
      pagina,
    };

    // console.log(data)
    // Realizar la solicitud POST utilizando Axios
    axios
      .post("https://taeconta.com/api/public/api/correos/publicos", data)
      .then((response) => {
        // console.log('Correo enviado con éxito:', response.data);
        Swal.fire(
          "Correo enviado exitosamente",
          "Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible. Gracias por ponerte en contacto con nosotros.",
          "success"
        );
        setCargando(false);
        clearState(e);
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error);
        Swal.fire(
          "Error al enviar el correo",
          error.message + ", " + error.response.data.message,
          "error"
        );
        setCargando(false);
        clearState(e);
      });
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Ponte en contacto</h2>
                <p>
                  Por favor, completa el formulario a continuación para
                  enviarnos un correo electrónico y nos pondremos en contacto
                  contigo lo antes posible.
                </p>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-4 col-lg-5">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nombre"
                        required
                        // onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        // onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <div className="form-group">
                      <input
                        type="tel"
                        id="phone_number"
                        name="phone_number"
                        className="form-control"
                        placeholder="Telefono"
                        required
                        // onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Mensaje"
                    required
                    // onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                {cargando ? (
                  <p>Cargando...</p>
                ) : (
                  <button type="submit" className="btn btn-custom ">
                    Enviar mensaje
                  </button>
                )}
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Información de contacto</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Dirección
                </span>
                {props.data ? (
                  <a
                    href="https://www.google.com.mx/maps/place/Av.+del+Rosal+71,+Molino+de+Rosas,+%C3%81lvaro+Obreg%C3%B3n,+01470+Ciudad+de+M%C3%A9xico,+CDMX/@19.3729608,-99.2024274,17z/data=!3m1!4b1!4m6!3m5!1s0x85d2002f0d93341b:0x4e19f6c74b899e16!8m2!3d19.3729558!4d-99.1975565!16s%2Fg%2F11c1xg9q57?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
                    {props.data.address}
                  </a>
                ) : (
                  "loading"
                )}
              </p>
            </div>
            <div className="contact-item" style={{ marginLeft: "-15px" }}>
              <p>
                <span className="row" style={{ margin: "0" }}>
                  <p className="col-lg-6">
                    <i className="fa fa-phone"></i>Teléfono{" "}
                  </p>
                  <p className="col-lg-6">
                    <i className="fa fa-whatsapp"></i>WhatsApp
                  </p>
                </span>{" "}
                {props.data ? (
                  <div className="row text-center">
                    <a
                      className="col-lg-6"
                      /*href={`https://wa.me/+52${props.data.phone}`}*/
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white" }}
                    >
                      {props.data.phone}
                    </a>
                    <p>
                      <a
                        className="col-lg-6"
                        href={`https://wa.me/+52${props.data.phone2}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white" }}
                      >
                        {props.data.phone2}
                      </a>
                    </p>
                  </div>
                ) : (
                  "loading"
                )}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? (
                  <>
                    <a
                      href={`mailto:${props.data.email}`}
                      style={{ color: "white" }}
                    >
                      {props.data.email}
                    </a>
                    <p>
                      <a
                        href={`mailto:${props.data.email2}`}
                        style={{ color: "white" }}
                      >
                        {props.data.email2}
                      </a>
                    </p>
                  </>
                ) : (
                  "loading"
                )}
              </p>
            </div>

            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-calendar"></i> Horario de Servicio:
                </span>{" "}
                Lunes – Viernes 9:00 am a 6:30 pm Sábado 9:00 am a 2:00 pm
              </p>
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      href={props.data ? props.data.facebook : "/"}
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; Desarrollado por
            <a
              href="https://tecnologiasadministrativas.com/"
              rel="nofollow"
              target="_blank"
            >
              {" "}
              TAE
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
