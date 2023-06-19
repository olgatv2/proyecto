import jwtDecode from "jwt-decode"
import PostWoman from "../infrastructure/postWoman"

export class LoginService {

  public static async login(name: string, password: string){
    const token = await PostWoman.get('/profile')
    console.log(token)
    const userData = jwtDecode(token.token)
    console.log(userData)
    
  }

}