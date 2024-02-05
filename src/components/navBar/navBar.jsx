import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
    <nav className="navBar">
      <ul className="ulNav">

        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/themes">Themes</Link>
        </li>
        <li>
          <Link to="/contact">Contact-us</Link>
        </li>
        <li>
          <Link to="/about">About-us</Link>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default NavBar;
