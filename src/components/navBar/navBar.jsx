import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useEffect, useState } from "react";
import { getThemes } from "../../services/NewServices";
import useAuthContext from "../../context/Authcontext";

const NavBar = () => {
  const [themes, setThemes] = useState([]);
  const navigate = useNavigate();
  const { token } = useAuthContext();

  useEffect(() => {
    console.log("test");
    async function getData() {
      let data = await getThemes();
      console.log(data);
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
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {!token && (
          <li>
            <Link to="/register">Register</Link>
          </li>
        )}
        {token && (
          <li>
            <Link to="/">Log-Out</Link>
          </li>
        )}
        <li id="themesLi">
          <Link to="/themes">Themes</Link>
          <ul>
            {themes?.map(({ id, name }) => (
              <li key={id}>
                {/* <Link to={{ pathname: '/', search: `?theme=${id}` }}>{name}</Link> */}
                {/* <Link to={`:${id}`}>{name}</Link> */}
                {
                  <button
                    onClick={() => {
                      navigate({ pathname: "/", search: `?theme=${id}` });
                    }}
                  >
                    {name}
                  </button>
                }
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
