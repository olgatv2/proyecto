import React from "react";
import Element from "./elemento/Element";
import './card.css'
import ProfileInfo from "./profileInfo/ProfileInfo";
import { Artist } from "../../../../types/artist";

interface CardProps {
  name: string
  image?: string
  type: string
  grouping: string
  placeholder: string
  info: Artist
}

const Card: React.FC<CardProps> = ({ name, image, type, grouping, placeholder, info }: CardProps) => {

  return (
    <div className="card">
      <div className="card__title">{name}</div>
      <div className="card__body">
        <img src={image} />
        <div>
          <Element data={type} icon="public/play.png" />
          <Element data={grouping} icon="public/music_icon.png"/>
          <Element data={placeholder} icon="public/placeholder.png"/>
        </div>
      </div>
      <div className="card__footer">
        <img src="public/user.png" className="icon"/>
        <ProfileInfo profileInfo={info}
        />
      </div>
    </div>
  )
}

export default Card
