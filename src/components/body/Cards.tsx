import React, { useEffect, useState } from "react";
import Card from "./Card";
import './cards.css'
import { User } from "../../types/user";
import Artist from "../../services/artist";


const usuarios: Array<User> = Artist.obtain(); 

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
        )}
    </div>
  )
}

export default Cards