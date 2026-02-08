import React from "react"
import { render } from "@testing-library/react"
import IndexPage from "../index"

describe("IndexPage", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<IndexPage />)
    expect(getByText(/Hello, I'm Bruno./i)).toBeInTheDocument()
  })

  it("renders the experience section", () => {
    const { getByRole } = render(<IndexPage />)
    expect(getByRole("heading", { name: /Experience/i })).toBeInTheDocument()
  })
})
