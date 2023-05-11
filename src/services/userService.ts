import PostWoman from "../infrastructure/postWoman"

export default class UserService {

  public static async signing(name:string, password:string){
    const endPoint:string = PostWoman.apiURL + '/users'
    const response = await PostWoman.get(endPoint, {name, password})

  }
}