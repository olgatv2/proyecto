import React, { useState } from "react";
import Card from "./Card";
type User = {
  id: string,
  name: string,
  musicType: string,
  description: string,
  placeholder: string,
  image : string
}

const usuarios: Array<User> = [
  {
    "id": "1",
    "name": "Paca",
    "musicType": "Clásica",
    "description": "Solista violín",
    "placeholder": "Valencia",
    "image": "public/violinista.jpg"
  },
  {
    "id": "2",
    "name": "Los Mancos",
    "musicType": "Rock, Punk",
    "description": "Grupo de rock",
    "placeholder": "Alboraya, Valencia",
    "image": "public/violinista.jpg"
  }
]

const Cards: React.FC = () => {
  
  const [users, setUsers] = useState(usuarios)


  return (
    <div>
      {
        users.map((user)=>
          <Card 
            key={user.id}
            name={user.name}
            type={user.musicType}
            desciption={user.description}
            placeholder={user.placeholder}
            image = {user.image}
          />
        )
      }
    </div>
  )
}

export default Cards