import PostWoman from '../infrastructure/postWoman'
import { Artist } from '../types/artist'

export default class ArtistService {
  public static async obtain(): Promise<Array<Artist>>{
    const endPoint:string = PostWoman.apiURL + '/artists'
    const artistsList = await PostWoman.get(endPoint)
    return this.parse(artistsList)
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

