import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { AuthProvider } from "./context/authcontext";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import LoginForm from "./components/LoginForm/LoginForm";
import Logo from "./components/Logo/Logonoticias.png";

import "./app.css";
import NavBar from "./components/NavBar/navBar";
import Error from "./pages/Error";
import About from "./pages/About";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Contact from "./pages/Contact";
import React from "react";
import ScrollToTopButton from "./ScrollToTopButton";

function App() {
  return (
    <>
      <AuthProvider>
        <Logo />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          <Route path="/*" element={<Error />} />
        </Routes>
      </AuthProvider>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My App</h1>
        </header>
        <div style={{ height: "2000px" }}>
          {/* Contenido largo para que el usuario necesite desplazarse */}
        </div>
        <ScrollToTopButton />
      </div>
    </>
  );
}
export default App;
