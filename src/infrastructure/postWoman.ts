export default class PostWoman {
  private static readonly apiURL: string = "http://localhost:3000"

  public static async get(queryParams?: Record<string, string>) {
    //refactorizar
    const response = await fetch(this.apiURL + '/artists',
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(queryParams)
      })
    return await response.json()
  }

  public static async post(payLoad? : Record<string, any>) {
    const options= {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(payLoad)
    }
    
    const response = await fetch(this.apiURL, options)
    return await response.json()
  }
}