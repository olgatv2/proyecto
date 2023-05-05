import PostWoman from '../infrastructure/postWoman'
import { MusicType } from '../types/music'

export default class MusicTypeService {
  public static async obtain(): Promise<Array<MusicType>>{
    const musicTypeList = await PostWoman.getMusicTypes()
    return this.parse(musicTypeList)
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