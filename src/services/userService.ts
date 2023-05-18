import PostWoman from "../infrastructure/postWoman"
import { User } from "../types/user"

export default class UserService {
  private static usersList: Array<User>

  public static async obtain(): Promise<Array<User>> {
    const endPoint: string = PostWoman.apiURL + '/users'
    const usersGet = await PostWoman.get(endPoint)
    return this.parseUsers(usersGet)
  }

  public static async login(name: string, password: string): Promise<User | undefined> {
    const usersList = await this.obtain()
    const loguedUser = usersList.find((user: User) => (user.name == name) && (user.password == password))
    return loguedUser
  }

  public static async signing(name: string, email: string, password: string): Promise<User> {
    const endPoint: string = PostWoman.apiURL + '/users'
    let result: User

    const response = await PostWoman.post(endPoint, name, email, password)
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

  private static parseUsers(userList: Array<Record<string, any>>): Array<User> {
    const registers: Array<User> = userList.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
      }
    })
    this.usersList = registers
    return this.usersList
  }

  public static async checkEmail(email: string): Promise<boolean> {
    const users: Array<User> = await this.obtain()
    const notValid: boolean = this.isRepeated(email, users)
    return notValid
  }

  private static isRepeated(email: string, users: Array<User>): boolean {
    let result: boolean = false
    const repeated = users.find((user) =>  user.email == email )
    if(!repeated) result = true
    return result
  }
}