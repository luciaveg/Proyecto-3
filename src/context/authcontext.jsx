import { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(false); 

	const handleToken = (jwt) => {
		if (token === null) {
			setToken(jwt);
			localStorage.setItem('token', jwt);
		} else {
			setToken(null);
			localStorage.removeItem('token');
		}
	};

	const data = { token, handleToken };

	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContext;
