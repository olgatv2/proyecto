import React from "react";
import './footer.css'

const Footer: React.FC = () => {
  return (
    <section className="footer">
      <div className="footer__columns">
        <div className="column">
          <img src="public/logo.jpg" alt="logo" className="logo" />
        </div>
        <div className="column">
          <h4>Sobre nosotros</h4>
          <a href="#">Contacto</a>
          <a href="#">Términos de uso</a>
          <a href="#">Aviso legal</a>
        </div>
        <div className="column">
          <h4>Redes Sociales</h4>
          <div>
            <img src="public/iconos/insta.png" className="icon" />
            <img src="public/iconos/facebook.png" className="icon" />
            <img src="public/iconos/tiktok.png" className="icon" />
          </div>
        </div>
      </div>
      <div className="copyRight">CopyRight ©</div>
    </section>
  )
}

export default Footer