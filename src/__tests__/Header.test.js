import React from "react"
import { shallow } from "enzyme"
import Header from "../components/Header"

describe("<Header />", () => {
  test("should render without crashing", () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toHaveLength(1)
  })

  test("should have a heading of Todoloo ", () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find(".header__title").text()).toEqual("Todoloo")
  })

  it("should contain a GitHub link", () => {
    const wrapper = shallow(<Header />)
    expect(
      wrapper
        .find(".header__nav-link")
        .at(0)
        .text()
    ).toEqual("GitHub")
  })

  it("should contain a contact link", () => {
    const wrapper = shallow(<Header />)
    expect(
      wrapper
        .find(".header__nav-link")
        .at(1)
        .text()
    ).toEqual("Contact")
  })
})
