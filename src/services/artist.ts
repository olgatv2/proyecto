import dataList from '../../data/db.json'
import { User } from '../types/user'

export default class Artist {
  public static obtain(): Array<User>{
    return this.parse(dataList.users)
  }

  private static parse(dataList: Array<Record<string, string>>): Array<User>{
    const usuarios:Array<User> = dataList.map((user) =>{
      return {
        id: user.id,
        name : user.name,
        musicType: user.musicType,
        description: user.description,
        placeholder: user.placeholder,
        image: user.image
      }
    })

    return usuarios
  }

  // private static filterArtist()
}

