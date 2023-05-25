import PostWoman from '../infrastructure/postWoman'
import { Artist } from '../types/artist'

export default class ArtistService {
  public static async obtain(): Promise<Array<Artist>> {
    const endPoint: string = PostWoman.apiURL + '/artists'

    const artistsList = await PostWoman.get(endPoint)

    return this.parse(artistsList)
  }

  private static parse(dataList: Array<Record<string, string>>): Array<Artist> {
    const artistsList: Array<Artist> = dataList.map((artist) => {
      return {
        name: artist.name,
        musicType: artist.musicType,
        grouping: artist.grouping,
        placeholder: artist.placeholder,
        image: artist.image,
        description: artist.description,
        email: artist.email,
        phonenumber: artist.phonenumber,
        rrss: artist.rrss
      }
    })
    return artistsList
  }

  public static createArtist(
    name: string,
    musicType: string,
    grouping: string,
    placeholder: string,
    image: string,
    description: string,
    email: string,
    phonenumber: string,
    rrss: string
  ) {

    const endPoint: string = PostWoman.apiURL + '/artists'
    if(image == '') image = 'public/guitar.png'
    PostWoman.postArtist(endPoint, name, musicType, grouping, placeholder, image, description, email, phonenumber, rrss)

  }
}
