import React from "react";

function About() {
  return (
    <section id="about">
      <h2 style={{ textAlign: "center", fontSize: 50 }}>Sobre Mí</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div>
          <p>
            Hola, Soy Mati De Vincenti Programador Front End, tengo 17 años y
            soy un apasionado por la programacion. Estudiante de la Escuela
            Tecnica de la UBA.{" "}
          </p>
        </div>
        <div style={{ maxWidth: "200px" }}>
          <img src="/file.png" alt="foto avatar" style={{ width: "100%" }} />
        </div>
      </div>
    </section>
  );
}

export default About;
