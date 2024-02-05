import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



import { AuthProvider } from './context/authcontext';
import NavBar from './components/NavBar/navBar';
import Footer from './components/Footer/Footer';
import CardNews from './components/CardNews/CardNews';
import UserForm from './components/UserForm/UserForm';
import buttonNoticia from './components/buttonNews/buttonNews'
import NoticiaFormulario from './components/buttonNews/buttonNews';



function App(){

    return (
		<>
		<AuthProvider>
		<NavBar/>
		<UserForm/>
		<CardNews/>
		<Footer/>
		</AuthProvider>
		</>
	);
}
export default App;