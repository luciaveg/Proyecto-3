import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import AuthContext from '.context/authcontext.jsx';

const PrivateRoute = () => {
	const { token } = useContext(AuthContext);
	return <>{token ? <Outlet /> : <Navigate to="login" />}</>;
};

export default PrivateRoute;
