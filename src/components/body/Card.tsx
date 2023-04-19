import React from "react";
import './card.css'

const Card: React.FC = () => {

  return (

    <div className="card">
      <div className="card__title">UserName</div>
      <div className="card__body">
        <img src="public/violinista.jpg" alt="muestra" />
        <div className="card__body__info">
          (Estrellitas)
          <div>
            <img className='icon' src="public/play.png" />
            Tipo de agrupación
          </div>
          <div>
            <img className='icon' src="public/music_icon.png" />
            Tipo de música
          </div>
          <div>
            <img className='icon' src="public/placeholder.png" />
            Ubicación
          </div>
        </div>
      </div>
      <div className="card__footer">
        <a href="#">Ver perfil</a>
        <img className='icon' src="public/user.png"/>
      </div>
    </div>
  )
}

export default Card
