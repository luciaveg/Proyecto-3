import NavBar from "./components/NavBar/navBar";

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Today from './pages/Today';
import Cocina from './pages/Cocina';
import Deportes from './pages/Deportes';
import Dashboard from './pages/Dashboard';
import Musica from './pages/Musica';
import Politica from './pages/Politica';
import Error from './pages/Error';
import CardNews from "./components/CardNews/CardNews";
import './app.css';

function App(){

    return (
		<>
		<h1 className="tituloApp">APP de Noticias</h1>
			<NavBar className="navBar">
			<Routes>
				<Route path="/" element={<Home data={CardNews}/>} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="today" element={<Today/>} />
                <Route path='cocina' element={<Cocina />} />
                <Route path='deportes' element={<Deportes />} />
                <Route path='musica' element={<Musica />} />
                <Route path='politica' element={<Politica />} />
                <Route path='dashboard' element={<Dashboard />} />
				<Route path='*' element={<Error />} />
		</Routes>
		</NavBar>
		</>
	);
}
export default App;