import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getThemes } from "../../Services/NewServices";
import useAuthContext from "../../context/authcontext";
import "./NavBar.css";

const NavBar = () => {
  const [themes, setThemes] = useState([]);
  const navigate = useNavigate();
  const { token, user } = useAuthContext();

  useEffect(() => {
    async function getData() {
      let data = await getThemes();
      setThemes(data);
    }
    getData();
  }, []);

  return (
    <nav className="navBar">
      <ul className="ulNav">
        <li>
          <Link to="/">Home</Link>
        </li>
        {!token && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
        {token && (
          <>
            <li className="user-info">
              <img src={user.avatar} alt="Avatar" className="avatar" />
              <span>{user.username}</span>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
        <li id="themesLi">
          <Link to="/themes">Themes</Link>
          <ul>
            {themes.map(({ id, name }) => (
              <li key={id}>
                <button onClick={() => navigate({ pathname: "/", search: `?theme=${id}` })}>{name}</button>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <Link to="/contact">Contact-us</Link>
        </li>
        <li>
          <Link to="/about">About-us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
