import React from "react"
import "../css/header.css"

const Header = () => (
  <header className="header">
    <h1 className="header__title">Todoloo</h1>
    <nav className="header__nav">
      <a className="header__nav-link" href="https://github.com/varjmes/todo">
        GitHub
      </a>
      <a className="header__nav-link" href="mailto:hello@jmes.tech">
        Contact
      </a>
    </nav>
  </header>
)

export default Header
