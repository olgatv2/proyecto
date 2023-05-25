import React, { useEffect, useState } from "react"
import ArtistService from "../services/artistService"
import Email from "./modals/register/email/Email"



const Create: React.FC = () => {
  const [disabled, setDisabled] = useState<boolean | undefined>(true)
  const [artistName, setArtistName] = useState('')
  const [musicType, setMusicType] = useState('')
  const [image, setImage] = useState('public/guitar.png')
  const [grouping, setGrouping] = useState('')
  const [placeholder, setPlaceholder] = useState('')
  const [description, setDescription] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState<boolean>(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [rrss, setRrss] = useState('')

  useEffect(() => {
    const fullfilled : boolean = (artistName != '' && musicType != '' && grouping != '' && placeholder != '' && email != '')
    const isWrong : boolean = !fullfilled || emailError
    setDisabled(isWrong)
    console.log(musicType)
  }, [artistName, musicType, grouping, placeholder, email])

  const handleEmail =  (value: string, error: boolean) => {
    setEmailError(error)
    setEmail(value)
  }

  const createCard = () => {

    ArtistService.createArtist(artistName, musicType, grouping, placeholder, image, description, email, phoneNumber, rrss)
  }

  return (
    <div>
      <h1>Crea tu Perfil</h1>
      <div>
        <div>
          <label>Nombre</label>
          <input type="text" onChange={e => setArtistName(e.target.value)} />
        </div>
        <div>
          <label>Tipo de música:</label>
          <div>
            <input type="radio" id="rock" name="type" value="rock"
              onChange={e => setMusicType(e.target.value)} />
            <label htmlFor="rock">Rock</label>
          </div>

          <div>
            <input type="radio" id="clásica" name="type" value="clásica"
              onChange={e => setMusicType(e.target.value)} />
            <label htmlFor="clásica">Clásica</label>

          </div>
          <div>
            <input type="radio" id="pop" name="type" value="pop"
              onChange={e => setMusicType(e.target.value)} />
            <label htmlFor="pop">Pop</label>
          </div>

          <div>
            <input type="radio" id="covers" name="type" value="covers"
              onChange={e => setMusicType(e.target.value)} />
            <label htmlFor="covers">Covers</label>
          </div>

          <div>
            <input type="radio" id="jazz" name="type" value="jazz"
              onChange={e => setMusicType(e.target.value)} />
            <label htmlFor="jazz">Jazz</label>
          </div>
        </div>
        <div>
          <label>Tipo de agrupación:</label>
          <input type="text" onChange={(e) => setGrouping(e.target.value)} />
        </div>
        <div>
          <label>Descripción</label>
          <input type="text" onChange={e => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Dónde</label>
          <input type="text" onChange={e => setPlaceholder(e.target.value)} />
        </div>
        <div>
          <Email onChange={handleEmail}/>
        </div>
        <div>
          <label>Número de teléfono</label>
          <input type="text" onChange={e => setPhoneNumber(e.target.value)} />
        </div>
        <div>
          <label>Redes sociales</label>
          <input type="text" onChange={e => setRrss(e.target.value)} />
        </div>
        <button disabled={disabled} onClick={createCard}>Crear</button>
      </div>
    </div>
  )
}

export default Create
