import PostWoman from "../infrastructure/postWoman"
import { User } from "../types/user"


export default class UserService {

  public static async login(name: string, password: string): Promise<boolean> {
    const endPoint: string = PostWoman.apiURL + '/users'
    let result: boolean = false

    const response = await PostWoman.get(endPoint, { name, password })
    result = response
    console.log(response)

    return result
  }

  public static async signing(name: string, email: string, password: string): Promise<User> {
    const endPoint: string = PostWoman.apiURL + '/users'
    let result: User

    const response = await PostWoman.post(endPoint, { name, email, password })
    result = this.parse(response)

    return result
  }


  private static parse(user: Record<string, any>): User {
    const registered: User = {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    }
    return registered
  }

}