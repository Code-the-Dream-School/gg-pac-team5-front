import { CSSProperties } from "react"
import { NavLink } from "react-router-dom"
import "../../../Assets/Layouts/NavBar.css"

const NavBar = () => {
  const activeStyles: CSSProperties = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }

  return (
    <nav className="nav-wrapper">
      <NavLink
        to="."
        end
        style={({ isActive }) => (isActive ? activeStyles : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to="services"
        style={({ isActive }) => (isActive ? activeStyles : undefined)}
      >
        Services
      </NavLink>
      <NavLink
        to="auth"
        style={({ isActive }) => (isActive ? activeStyles : undefined)}
      >
        Login
      </NavLink>
    </nav>
  )
}

export { NavBar }
