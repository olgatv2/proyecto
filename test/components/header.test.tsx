import { render, screen } from "@testing-library/react"
import React from "react"
import Header from "../../src/components/header/Header"


describe("Header", () => {
  it("has a logo, two buttons and an image", async () => {
    SUT.render()
    const icon = screen.queryByAltText('logo')
    const access = screen.queryByRole('button', {name: 'Entra'})
    const register = screen.queryByRole('button', {name: 'Regístrate'})
    const image = screen.queryByAltText('musicians')
    
    expect(icon).toBeInTheDocument()
    expect(access).toBeInTheDocument()
    expect(register).toBeInTheDocument()
    expect(image).toBeInTheDocument()
  })

})

class SUT {
  static render() {
    render(<Header />)
  }
}
