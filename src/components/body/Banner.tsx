import React from "react";
import './banner.css'

const Banner: React.FC = () => {

  return (
    <div className="banner">
      <h1>¿Cómo funciona?</h1>
      <div className="steps">
        <div>
          <img src="/search.png" />
          <h2>Paso 1</h2>
          <p>Busca según el tipo de música que quieras</p>
        </div>
        <div>
          <img src="/star.png" />
          <h2>Paso 2</h2>
          <p>Consulta valoraciones de nuestros usuarios</p>
        </div>
        <div>
          <img src="/deal.png" />
          <h2>Paso 3</h2>
          <p>Contacta con los artistas que quieras</p>
        </div>
      </div>
    </div>
  )
}
export default Banner