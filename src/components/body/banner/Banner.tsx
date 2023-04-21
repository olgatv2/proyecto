import React from "react";
import './banner.css'
import Step from "./steps/Step";

const Banner: React.FC = () => {

  return (
    <div className="banner">
      <h1>¿Cómo funciona?</h1>
      <div className="steps">
        <Step srcStep="/search.png" stepNumber="1" stepDescription="Busca según el tipo de música que quieras" />
        <Step srcStep="/star.png" stepNumber="2" stepDescription="Consulta valoraciones de nuestros usuarios" />
        <Step srcStep="/deal.png" stepNumber="3" stepDescription="Contacta con los artistas que quieras" />
      </div>
    </div>
  )
}
export default Banner