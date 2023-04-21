import React from "react";
import Column from "./columns/Column";
import './footer.css'

const Footer: React.FC = () => {
  return (
    <section className="footer">
      <div className="footer__columns">
        <div className="column">
          <img src="#" alt="logo" />
        </div>
        <Column title='Sobre nosotros'/>
        <Column title='Síguenos' />
      </div>
      <div className="copyRight">CopyRight ©</div>
    </section>
  )
}

export default Footer