import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  /* const handleToken = (jwt) => {
		if (token === null) {
			setToken(jwt);
			localStorage.setItem('token', jwt);
		} else {
			setToken(null);
			localStorage.removeItem('token');
		}
	}; */

  const handleToken = (jwt = "") => {
    setToken(jwt);
  };

  useEffect(() => {
    localStorage.setItem("token", token);
  });

  const data = { token, handleToken };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

function useAuthContext() {
  return useContext(AuthContext);
}

export default useAuthContext;
