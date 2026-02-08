import React from "react"
import { render } from "@testing-library/react"
import { Link } from "../Link"

describe("Link", () => {
  it("renders correctly with children", () => {
    const { getByText } = render(
      <Link title="Test Link" href="https://example.com">
        Test Content
      </Link>
    )
    expect(getByText("Test Content")).toBeInTheDocument()
  })

  it("has the correct href and title", () => {
    const { getByTitle } = render(
      <Link title="Test Title" href="https://example.com">
        Content
      </Link>
    )
    const link = getByTitle("Test Title")
    expect(link).toHaveAttribute("href", "https://example.com")
  })
})
