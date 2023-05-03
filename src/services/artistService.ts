import dataList from '../../data/db.json'
import { Artist } from '../types/artist'


export default class ArtistService {

  private static readonly apiURL : string = "http://localhost:3000"

  public static obtain(): Array<Artist>{
    return this.parse(dataList.artists)
  }

  private static parse(dataList: Array<Record<string, string>>): Array<Artist>{
    const artistsList:Array<Artist> = dataList.map((artist) =>{
      return {
        id: artist.id,
        name : artist.name,
        musicType: artist.musicType,
        description: artist.description,
        placeholder: artist.placeholder,
        image: artist.image
      }
    })

    return artistsList
  }

}

