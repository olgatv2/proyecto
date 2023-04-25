import dataList from '../../data/db.json'
import { MusicType } from '../types/music'

export default class MusicTypes {
  public static obtain(): Array<MusicType>{
    return this.parse(dataList.musicTypes)
  }

  private static parse(dataList: Array<Record<string, string>>): Array<MusicType> {
    const musicTypes : Array<MusicType> = dataList.map(type =>
      {
        return {
          name: type.name,
          src: type.src
        }
      }) 
      return musicTypes
  }
}