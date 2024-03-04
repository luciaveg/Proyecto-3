import { useNavigate } from "react-router-dom";
import useAuthContext from "../../context/Authcontext";
import "./LoginForm.css";

const { VITE_BACKENDURL } = import.meta.env;

const LoginForm = () => {
  const { token, handleToken } = useAuthContext();
  const navigate = useNavigate();
  if (token) {
    navigate("/");
  }
  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());
    console.log(data);
    const response = await fetch(VITE_BACKENDURL + "/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: "jwt_token",
      },
      body: JSON.stringify(data),
    });

    const { token } = await response.json();
    console.log(token);

    if (!response) {
      throw new Error("Los Campos son Obligatorios para ser Logeado");
    }

    if (!token) {
      alert("Datos Incorrectos");
      return;
    }

    if (token) {
      handleToken(token);
      alert("Logeado");
      navigate(`/`);
    }
  };
  return (
    <form id="form" onSubmit={handleLogin}>
      <h4>Complete to Login:</h4>
      <div className="input-email">
        <label>Email:</label>
        {<input type="email" autoComplete="false" name="email" />}
      </div>
      <div className="input-password">
        <label htmlFor="Password">Password:</label>
        <input type="password" autoComplete="false" name="password" />
      </div>
      <div className="button-form">
        <button className="login-button">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
