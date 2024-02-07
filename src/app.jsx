import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



<<<<<<< HEAD
import { AuthProvider } from './context/authcontext';

import CardNews from './components/CardNews/CardNews';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import LoginForm from './components/LoginForm/LoginForm';
import Logo from './components/Logo/Logo';

import './app.css';
import NavBar from './components/NavBar/navBar';


=======
// import { AuthProvider } from './context/authcontext';
// import NavBar from './components/navBar/navBar';
// import Footer from './components/Footer/Footer';
// import CardNews from './components/CardNews/CardNews';
// import UserForm from './components/UserForm/UserForm';
>>>>>>> fc1f61b531461a47d4ecc9a3f29bf3813707ef69

import NewsDetail from './components/NewsDetails/NewsDetails';
import NewNew from './components/NewNew/NewNew';

function App(){

    return (
		<>
<<<<<<< HEAD
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
=======
			<NewsDetail title={"EL titulo de la noticia"} avatar={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} text={"El texto de la noticia"}/>
			<NewNew/>

			{/* <AuthProvider>
			<NavBar/>
			<UserForm/>
			<CardNews/>
			<Footer/>
			</AuthProvider> */}
		</> 
>>>>>>> fc1f61b531461a47d4ecc9a3f29bf3813707ef69
	);
}
export default App;