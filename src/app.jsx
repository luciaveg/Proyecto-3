import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { AuthProvider } from './context/authcontext';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import LoginForm from './components/loginForm/loginForm';
import Logo from './components/logo/logo';

import './app.css';
import NavBar from './components/navBar/navBar';
import Error from './pages/Error';
import About from './pages/About';
import RegisterForm from './components/registerForm/registerForm';
import Contact from './pages/Contact';




function App(){

    return (
		<>
		<AuthProvider>
			<Logo/>
		<NavBar/>
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/news" element={<Home/>}/>
			<Route path="/login" element={<LoginForm/>}/>
			<Route path="/register" element={<RegisterForm/>}/>
			<Route path="/contact" element={<Contact/>}/>
			<Route path="/about" element={<About/>}/>
			
			<Route path="/*" element={<Error/>}/>
		</Routes>
		</AuthProvider>
		</>
	);
}
export default App;