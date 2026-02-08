import React from "react"
import { render } from "@testing-library/react"
import IndexPage from "../index"
import { PageProps } from "gatsby"

const mockPageProps: PageProps = {
  path: "/",
  uri: "/",
  location: {
    pathname: "/",
    search: "",
    hash: "",
    state: {},
    key: "initial",
    action: "PUSH",
    ancestorOrigins: {} as any,
    assign: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    origin: "",
    hostname: "",
    href: "",
    port: "",
    protocol: "",
    host: "",
  } as any,
  params: {},
  data: {},
  pageContext: {},
  serverData: {},
  pageResources: {} as any,
  children: undefined,
}

describe("IndexPage", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<IndexPage {...mockPageProps} />)
    expect(getByText(/Hello, I'm Bruno./i)).toBeInTheDocument()
  })

  it("renders the experience section", () => {
    const { getByRole } = render(<IndexPage {...mockPageProps} />)
    expect(getByRole("heading", { name: /Experience/i })).toBeInTheDocument()
  })
})
