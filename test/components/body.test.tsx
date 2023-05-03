import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import Body from "../../src/components/body/Body"

describe("Body", () => {
  it("can filter cards", async () => {
    SUT.render()
    const classicalCard = SUT.obtainClassicalCard()
    const popCard = SUT.obtainPopCard()

    SUT.clickFilter()

    expect(popCard).not.toBeInTheDocument()
    expect(classicalCard).toBeInTheDocument()
  })
})

class SUT {

  static render() {
    render(<Body />)
  }
  static clickFilter() {
    const buttonFilter = screen.getByRole("button", { name: "Clásica icon" })
    fireEvent.click(buttonFilter)
  }

  static obtainClassicalCard() {
    return screen.queryByText('Solista violín')
  }

  static obtainPopCard() {
    return screen.queryByText('Grupo de Rock')
  }
}