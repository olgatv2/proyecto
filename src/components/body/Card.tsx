import React from "react";
import './card.css'

const Card: React.FC = (props) => {

  return (

    <div className="card">
      <div className="card__title">{props.title}</div>
      <div className="card__body">
        <img src={props.image} />
        <div className="card__body__info">
          (Estrellitas)
          <div>
            <img className='icon' src="public/play.png" />
            {props.musicType}
          </div>
          <div>
            <img className='icon' src="public/music_icon.png" />
            {props.description}
          </div>
          <div>
            <img className='icon' src="public/placeholder.png" />
            {props.placeholder}
          </div>
        </div>
      </div>
      <div className="card__footer">
        <img className='icon' src="public/user.png" />
        <a href="#">Ver perfil</a>
      </div>
    </div>
  )
}

export default Card
