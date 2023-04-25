import React, { useEffect, useState } from "react";
import Card from "./card/Card";
import './cards.css'
import { User } from "../../../types/user";
import Artist from "../../../services/artist";

const usuarios: Array<User> = Artist.obtain(); 

interface cardsProps {
  type: string
}

const Cards: React.FC<cardsProps> = ({type: selectedType}) => {

  const [users, setUsers] = useState<Array<User>>(usuarios)

  const filter = (selectedType : string) => {
    console.log(selectedType)
    const filtered: Array<User> = usuarios.filter((user : User) =>  user.musicType == selectedType)
    console.log(filtered)
    setUsers(filtered)
  }

  useEffect(()=> {
    if(selectedType != '') filter(selectedType)
  },[selectedType])

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
        )}
    </div>
  )
}

export default Cards