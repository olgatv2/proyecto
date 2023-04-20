import React, { useEffect, useState } from "react";
import Card from "./Card";
import './cards.css'

type User = {
  id: number,
  name: string,
  musicType: string,
  description: string,
  placeholder?: string,
  image?: string
}


const usuarios: Array<User> = [
  {
    id: 1,
    name: "Paca",
    musicType: "Clásica",
    description: "Solista violín",
    placeholder: "Valencia",
    image: "public/violinista.jpg"
  },
  {
    id: 2,
    name: "Los Mancos",
    musicType: "Rock, Punk",
    description: "Grupo de rock",
    placeholder: "Alboraya, Valencia",
    image: "public/violinista.jpg"
  }
]

const apiUrl: string = 'http://localhost:3000/users' 

const Cards: React.FC = () => {

  const [users, setUsers] = useState<Array<User>>(usuarios)

  return (
    <div className="cards">
      {
        users.map((user: User) => (
          <Card
            key={user.id}
            name={user.name}
            type={user.musicType}
            description={user.description}
            placeholder={user.placeholder}
            image={user.image}
          />
        )
        )
      }
    </div>
  )
}

export default Cards