import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { AuthProvider } from './context/authcontext';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import LoginForm from './components/LoginForm/LoginForm';
import Logo from './components/Logo/Logonoticias.png';

import './app.css';
import NavBar from './components/NavBar/navBar';
import Error from './pages/Error';
import About from './pages/About';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Contact from './pages/Contact';
import React from 'react';
import ScrollToTopButton from './ScrollToTopButton';
import { SfNav } from 'react-sf-building-blocks';


function App(){

    return (
		<>
		
		<AuthProvider>
			<Logo/>
			<div>
    <SfNav
        showProfile={true}
        profilePicture="https://i.pinimg.com/736x/7f/79/6d/7f796d57218d9cd81a92d9e6e8e51ce4--free-avatars-online-profile.jpg"
        profileMenu={[
        { caption: 'Profile', link: 'profile' },
        [
            { caption: 'Settings', link: 'support' },
            { caption: 'Notifications', link: 'notifications' },
            { caption: 'Privacy', link: 'privacy' },
        ],
        { caption: 'Support', link: 'support' },
        { caption: 'Upgrade', link: 'upgrade' },
        ]}
        profilePreamble={
        <div
            style={{
              width: '100%',
              paddingTop: '10px',
              paddingBottom: '10px',
              paddingLeft: '10px',
              paddingRight: '10px',
            }}
        >
            <small>Hi Hrushi!</small>
            <br />
            <small>
            <small>
                <i>Welcome to Superflows!</i>
            </small>
            </small>
        </div>
        }
        profileComponent={
        <div
            style={{
              width: '100%',
              paddingTop: '10px',
              paddingBottom: '10px',
              paddingLeft: '10px',
              paddingRight: '10px',
            }}
        >
            <small>Sign Out</small>
        </div>
        }
        signInCaption="Subscribe"
        onMenuClicked={(value) => {
        alert(value);
        }}
        onSignInPressed={() => {
        alert('Subscribe pressed!');
        }}
        stylesProfilePictureContainer={{
          backgroundColor: 'black',
          padding: '2px',
          color: 'white',
          borderRadius: '5px',
        }}
        stylesProfilePreamble={{ backgroundColor: 'white', color: 'black' }}
        stylesProfileComponent={{ backgroundColor: 'white', color: 'black' }}
        stylesMenu={{
          backgroundColor: 'black',
          color: 'white',
          paddingTop: '3px',
          paddingBottom: '3px',
          paddingLeft: '10px',
          paddingRight: '10px',
          borderRadius: '5px',
        }}
        stylesSubMenu={{
          backgroundColor: 'black',
          color: 'white',
          paddingLeft: '5px',
          paddingRight: '5px',
          border: 'solid 1px gray',
        }}
        stylesMenuMobile={{
          backgroundColor: 'black',
          color: 'white',
          paddingLeft: '5px',
          paddingRight: '5px',
          borderRadius: '5px',
          border: 'solid 1px gray',
        }}
        stylesMenuMobileSelected={{
          backgroundColor: 'white',
          color: 'black',
          paddingLeft: '5px',
          paddingRight: '5px',
          borderRadius: '5px',
          border: 'solid 1px gray',
        }}
        stylesSubMenuMobile={{
          backgroundColor: 'black',
          color: 'white',
          paddingLeft: '5px',
          paddingRight: '5px',
          borderRadius: '5px',
          border: 'solid 1px gray',
        }}
    />
      {/* Your Code */}
    </div>
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
		<div className="App">
            <header className="App-header">
                <h1>Welcome to My App</h1>
            </header>
            <div style={{ height: '2000px' }}>
                {/* Contenido largo para que el usuario necesite desplazarse */}
            </div>
            <ScrollToTopButton />
        </div>
		</>

	);

}
export default App;