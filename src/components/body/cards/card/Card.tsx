import React from "react";
import Element from "./elemento/Element";
import './card.css'
import ProfileInfo from "./profileInfo/ProfileInfo";

interface CardProps {
  name: string
  image?: string
  type: string
  description: string
  placeholder?: string
}

const Card: React.FC<CardProps> = ({ name, image, type, description, placeholder }: CardProps) => {

  return (
    <div className="card">
      <div className="card__title">{name}</div>
      <div className="card__body">
        <img src={image} />
        <div>
          {/* <div>
          (Estrellitas)
          </div> */}
          <Element data={type} icon="public/play.png" />
          <Element data={description} icon="public/music_icon.png"/>
          <Element data={placeholder} icon="public/placeholder.png"/>
        </div>
      </div>
      <div className="card__footer">
        <img src="public/user.png" />
        <ProfileInfo />
      </div>
    </div>
  )
}

export default Card
