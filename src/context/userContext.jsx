import { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const handleUser = (userData) => {
		setUser(userData);
	};

	const data = { user, handleUser };

	return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserContext;
