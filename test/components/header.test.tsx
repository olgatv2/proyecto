
import { render, screen } from "@testing-library/react"
import React from "react"
import Header from "../../src/components/header/Header"


describe("Header", () => {
  it("has a menu icon", async () => {
    SUT.render()
    const icon = screen.queryByRole('img')
    const access = screen.queryByRole('button', {name: 'Entrar'})
    const register = screen.queryByRole('button', {name: 'Regístrate'})
    expect(icon).toBeInTheDocument()
    expect(access).toBeInTheDocument()
    expect(register).toBeInTheDocument()
  })
})

class SUT {
  static render() {
    render(<Header />)

  }
}
