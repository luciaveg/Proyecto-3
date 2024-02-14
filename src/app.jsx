import { AuthProvider } from "./context/Authcontext";

import "./app.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import LoginForm from "./components/LoginForm/LoginForm";
import NavBar from "./components/NavBar/NavBar";
import Error from "./pages/Error";
import About from "./pages/About";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Contact from "./pages/Contact";
import Logo from "./components/logo/logo";

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
    </>
  );
}
export default App;
