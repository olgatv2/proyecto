import React from "react"
import { vi } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import Register from '../../src/components/modals/register/Register'
import UserService from "../../src/services/userService"

describe("Register", () => {
  it("button is disabled until form is completed", async () => {
    SUT.render()
    expect(await SUT.submitButton()).toBeDisabled()
  })

  it("button is enabled when form is completed", async () => {
    SUT.render()
    await SUT.completeForm()
    expect(await SUT.submitButton()).toBeEnabled()
  })

  it("alerts when a wrong email is typed", async () => {
    SUT.render()
    await SUT.completeForm()
    await SUT.fillEmail('bad email')

    expect(await SUT.submitButton()).toBeDisabled()
    expect(screen.getByText('bad.email')).toBeInTheDocument()
  })

  it("alerts when passwords doesn't match", async () => {
    SUT.render()
    await SUT.completeForm()
    await SUT.fillPassword('password')
    await SUT.fillCheckPassword('differentpassword')

    expect(await SUT.submitButton()).toBeDisabled()
    expect(screen.getByText("Las contraseñas no coinciden")).toBeInTheDocument()
  })

  it('calls service when button is clicked', async () => {
    const spy = vi.spyOn(UserService, 'signing')
    
    SUT.render()
    await SUT.completeForm()
    const button = SUT.submitButton()
    fireEvent.click(await button)
   
    expect(spy).toHaveBeenCalled()
  })
})


class SUT {
  static render() {
    render(<Register />)
  }

  static async submitButton() {
    return await screen.findByRole('button')
  }

  static async completeForm() {
    await this.fillUsername('username')
    await this.fillEmail('email@mail.es')
    await this.fillPassword('1234')
    await this.fillCheckPassword('1234')
  }

  static async fillUsername(username: string): Promise<void> {
    const input = screen.getByRole('textbox', { name: 'username' })
    fireEvent.change(input, {
      target: { value: username },
    })
  }

  static async fillEmail(email: string): Promise<void> {
    const input = screen.getByRole('textbox', { name: 'email' })
    fireEvent.change(input, {
      target: { value: email }
    })
  }

  static async fillPassword(password: string): Promise<void> {
    const input = screen.getByRole('textbox', { name: 'password' })
    fireEvent.change(input, {
      target: { value: password },
    })
  }

  static async fillCheckPassword(checkedPassword: string): Promise<void> {
    const input = screen.getByRole('textbox', { name: 'checked' })
    fireEvent.change(input, {
      target: { value: checkedPassword },
    })
  }
}
