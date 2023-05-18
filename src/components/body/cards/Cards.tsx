import React, { useEffect, useState } from "react";
import Card from "./card/Card";
import './cards.css'
import { Artist } from "../../../types/artist";
import ArtistService from "../../../services/artistService";

const artistsList: Array<Artist> = await ArtistService.obtain(); 

interface cardsProps {
  type: string
}

const Cards: React.FC<cardsProps> = ({type: selectedType}) => {

  const [artists, setArtists] = useState<Array<Artist>>(artistsList)

  const filter = (selectedType : string) => {
    const filtered: Array<Artist> = artistsList.filter((artist : Artist) =>  artist.musicType == selectedType)
    setArtists(filtered)
  }

  useEffect(()=> {
    if(selectedType != '') filter(selectedType)
  },[selectedType])

  return (
    <div className="cards">
      {
        artists.map((artist: Artist) => (
          <Card 
            key={artist.id}
            name={artist.name}
            type={artist.musicType}
            grouping={artist.grouping}
            placeholder={artist.placeholder}
            image={artist.image}
            info = {artist}
          />
        ))
      }
    </div>
  )
}

export default Cards