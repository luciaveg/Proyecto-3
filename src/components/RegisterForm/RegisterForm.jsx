import './RegisterForm.css';
import { useNavigate } from 'react-router-dom';
const { VITE_BACKENDURL } = import.meta.env;
const RegisterForm = ()=>{


    const navigate = useNavigate();
    
    const handleRegister = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const data = Object.fromEntries(formData.entries());
console.log(data);
        const response = await fetch(VITE_BACKENDURL + "/register", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'jwt_token'
            },
                body: JSON.stringify(data)
            });
        
console.log(response);

alert("Registrado Exitosamente");

    navigate(`/login`);
    };
    return(
        <form id="form" onSubmit={handleRegister} >
            <h4>Complete to Register</h4>
            <div className='input-nickName'>
                <label >NickName:</label>
                <input 
                    type="text" 
                    autoComplete="false" 
                    name="nickName" 
                />
            </div>
            <div className='input-email'>
                <label >Email:</label>
                <input 
                    type="email" 
                    autoComplete="false" 
                    name="email" 
                />
            </div>
            <div className='input-password'>
                <label htmlFor="Password">Password:</label>
                <input 
                type="password" 
                    autoComplete="false" 
                    name="password" 
                />    
            </div>
                <div className="button-form">
                <button className="login-button">Send</button>
            </div>
        </form>        
    );
};


export default RegisterForm;