import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



import { AuthProvider } from './context/authcontext';

import CardNews from './components/CardNews/CardNews';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import LoginForm from './components/LoginForm/LoginForm';
import Logo from './components/Logo/Logo';

import './app.css';
import NavBar from './components/NavBar/navBar';

function App(){

    return (
		<>
		<AuthProvider>
			<Logo/>
		<NavBar/>
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="Login" element={<LoginForm/>}/>
		</Routes>
		<CardNews/>
		</AuthProvider>
		</>
	);
}
export default App;