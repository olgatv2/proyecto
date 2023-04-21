import React from "react";
import './footer.css'

const Footer: React.FC = () => {
  return (
    <section className="footer">
      <div className="footer__columns">
        <div className="column">
          <img src="#" alt="logo" />
        </div>
        <div className="column">
          Sobre Nosotros
        </div>
        <div className="column">
          Síguenos
        </div>
      </div>
      <div className="copyRight">CopyRight</div>
    </section>
  )
}

export default Footer