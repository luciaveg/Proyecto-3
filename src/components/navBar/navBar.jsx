import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
    <nav className="navBar">
      <ul className="ulNav">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cocina">Cocina</Link>
        </li>
        <li>
          <Link to="/musica">Música</Link>
        </li>
        <li>
          <Link to="/deportes">Deportes</Link>
        </li>
        <li>
          <Link to="/politica">Política</Link>
        </li>
        <li>
          <Link to="/today">Más Recientes</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default NavBar;
