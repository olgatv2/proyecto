import { Artist } from "../../../types/artist"

interface ModifyProps {
  artist : Artist
}

const Modify:React.FC<ModifyProps> = ({artist}) => {
  return (
    <div>
    <h1>Modificar Card</h1>
    <label>Nombre: </label>{artist.name}
    <p></p>
    </div>
  )
}

export default Modify