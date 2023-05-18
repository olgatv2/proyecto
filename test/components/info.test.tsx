import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import ProfileInfo from "../../src/components/body/cards/card/profileInfo/ProfileInfo"
import ModalInfo from "../../src/components/modals/info/ModalInfo"


describe("ProfileInfo", () => {
  it("has a button", async () => {
    SUT.render()
    const showModalButton = screen.queryByRole('button')
    expect(showModalButton).toBeInTheDocument()
  })

  it("shows a modal when button is clicked", async () => {
    SUT.render()
    const showModalButton = screen.getByRole('button')
    fireEvent.click(showModalButton)
    const equis = screen.getByAltText('imagen')
    expect(equis).toBeInTheDocument()
  })


})

class SUT {
  static render() {
    render(<ProfileInfo profileInfo={{
      id: "",
      name: "",
      musicType: "",
      grouping: "",
      placeholder: "",
      image: undefined,
      description: "",
      email: "",
      phonenumber: "",
      rrss: ""
    }} />)
  }
}