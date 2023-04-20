import React from "react";
import './card.css'

interface CardProps {
  name: string
  image?: string
  type: string
  description: string
  placeholder?: string
}

const Card: React.FC<CardProps>= ({name, image, type, description, placeholder}: CardProps) => {

  return (

    <div className="card">
      <div className="card__title">{name}</div>
      <div className="card__body">
        <img src={image} />
        <div className="card__body__info">
          (Estrellitas)
          <div>
            <img className='icon' src="public/play.png" />
            {type}
          </div>
          <div>
            <img className='icon' src="public/music_icon.png" />
            {description}
          </div>
          <div>
            <img className='icon' src="public/placeholder.png" />
            {placeholder}
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
