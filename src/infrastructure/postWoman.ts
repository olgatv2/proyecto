export default class PostWoman {
  public static readonly apiURL: string = "http://localhost:3000"

  public static async get(baseUrl: string, queryParams?: Record<string, any>) {
    const endpoint = new Endpoint(this.apiURL + baseUrl)
    endpoint.setQuery(queryParams)
    const url = endpoint.toUrl()
    console.log(url)
    const response = await fetch(url,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })

    return await response.json()
  }

  public static async post(baseUrl: string, name: string, email: string, password: string): Promise<Record<string, any>> {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    }
    const response: Response = await fetch(baseUrl, options)
    const created = await response.json()
    return await created
  }


  public static async postArtist(baseUrl: string, 
    name: string, 
    musicType: string,
    grouping: string,
    placeholder: string, 
    image: string, 
    description: string,
    email:string,
    phonenumber: string,
    rrss:string ) : Promise<Record<string, any>> {
    
      const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, musicType, grouping, placeholder, image, description, email, rrss })
    }
    const response: Response = await fetch(baseUrl, options)
    const created = await response.json()
    return await created
  }
}

class Endpoint {
  private readonly QUERY_SYMBOL: string = "?"
  private readonly QUERY_SEPARATOR: string = "&"
  private baseUrl: string
  private query: string = ""

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  setQuery(params?: Record<string, string>): void {
    let result: string = ""
    result += this.QUERY_SYMBOL
    for (const param in params) {
      result += `${param}=${params[param]}`
      result += this.QUERY_SEPARATOR
    }
    result = result.slice(0, -1)
    this.query = result
  }

  toUrl(): string {
    return encodeURI(this.baseUrl + this.query)
  }
}


