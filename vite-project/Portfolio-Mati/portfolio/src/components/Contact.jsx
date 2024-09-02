import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaGithubAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <form>
        <label>Nombre: Matias De Vincenti</label>
        <br />
        <a href="mailto:devincentimatias@gmail.com" target="_blank">
          <TfiEmail size={55} /> {/* Ajusta el tamaño según tus necesidades */}
        </a>
        <a href="https://github.com/MatiasDeVincenti" target="_blank">
          <FaGithubAlt size={55} />{" "}
          {/* Ajusta el tamaño según tus necesidades */}
        </a>
      </form>
    </section>
  );
}

export default Contact;
