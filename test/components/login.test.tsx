import { fireEvent, render, screen } from "@testing-library/react"
import { vi } from "vitest"
import React from "react"
import Login from "../../src/components/modals/login/Login"
import UserService from "../../src/services/userService"

describe("Login", () => {
  it("login button is disabled by default", async () => {
    SUT.render()
    expect(await SUT.submitButton()).toBeDisabled()
  })

  it("login button is enabled when inputs are filled", async () => {
    SUT.render()
    await SUT.completeForm()
    expect(await SUT.submitButton()).toBeEnabled()
  })

  it('calls service when button is clicked', async () => {
    const spy = vi.spyOn(UserService, 'signing')

    SUT.render()
    await SUT.completeForm()
    const button = await SUT.submitButton()
    fireEvent.click(button)
   
    expect(spy).toHaveBeenCalled()
  })

})

class SUT {

  static render() {
    render(<Login />)
  }

  static async submitButton() {
    return await screen.getByRole('button')
  }

  static async completeForm() {
    await this.fillUsername('username')
    await this.fillPassword('1234')
  }

  static async fillUsername(username: String): Promise<void> {
    const input = screen.getByPlaceholderText('username')
    fireEvent.change(input, { target: { value: 'Olga' } })
  }

  static async fillPassword(password: String): Promise<void> {
    const input = screen.getByPlaceholderText('password')
    fireEvent.change(input, { target: { value: 'Olga' } })
  }

}