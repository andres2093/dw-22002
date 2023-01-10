import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
      {/* Elementos a la izquierda */}
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/home"} className="nav-link">
            Home
          </Link>
        </li>
      </div>
      {/* Elementos a la derecha */}
      <div className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to={"/login"} className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/register"} className="nav-link">
            Register
          </Link>
        </li>
      </div>
    </nav>
  )
}