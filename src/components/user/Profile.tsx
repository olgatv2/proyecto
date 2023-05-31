import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Create from "./create/Create"
import Modify from "./modify/Modify"
import './profile.css'
import { User } from "../../types/user"
import UserService from "../../services/userService"

const Profile: React.FC = () => {
  const [createDisabled, setCreateDisabled] = useState(false)
  const [modifyDisabled, setModifyDisabled] = useState(false)
  const [card, setCard] = useState(false)
  const [showCreate, setShowCreate] = useState(false)
  const [showModify, setShowModify] = useState(false)

  const navigate = useNavigate()

  // const user : User = UserService.currentUser
  // setCard(user.card)
  
  const createCard = () => {
    if (!card) {
      setShowCreate(true)
    }
  }

  const modifyCard = () => {
    if (card) {
      setShowCreate(false)
      setShowModify(true)
    }
  }

  const logOut = () => {
    UserService.logOut()
    navigate('/')
  }

  return (
    <div className="profile">
      <h1>Bienvenido</h1>
      {/* {card &&
        <Info />
      } */}
      <div className="profile__nav">
        <button disabled={createDisabled} onClick={createCard} >Crear</button>
        <button disabled={modifyDisabled} onClick={modifyCard}>Modificar</button>
        <button onClick={() => navigate('/')}>Ir a la página principal</button>
        <button onClick={logOut}>Log Out</button>
      </div>
      {(!card && showCreate) && <Create />}
      {(card && showModify) && <Modify artist={{
        name: "",
        musicType: "",
        grouping: "",
        placeholder: "",
        image: undefined,
        description: "",
        email: "",
        phonenumber: undefined,
        rrss: undefined
      }} />}
    </div>
  )
}

export default Profile