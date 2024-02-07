import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



// import { AuthProvider } from './context/authcontext';
// import NavBar from './components/navBar/navBar';
// import Footer from './components/Footer/Footer';
// import CardNews from './components/CardNews/CardNews';
// import UserForm from './components/UserForm/UserForm';

import NewsDetail from './components/NewsDetails/NewsDetails';
import NewNew from './components/NewNew/NewNew';

function App(){

    return (
		<>
			<NewsDetail title={"EL titulo de la noticia"} avatar={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} text={"El texto de la noticia"}/>
			<NewNew/>

			{/* <AuthProvider>
			<NavBar/>
			<UserForm/>
			<CardNews/>
			<Footer/>
			</AuthProvider> */}
		</> 
	);
}
export default App;