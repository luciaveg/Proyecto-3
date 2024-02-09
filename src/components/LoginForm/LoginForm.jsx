
import './LoginForm.css';
import { useRef, useState } from 'react';

const LoginForm = ()=>{

    const [dataBase, setDataBase] = useState([]);   // HOOK
    
    const titleRef = useRef();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    //const {theme} = useContext(ThemeContext);


    const handleFormSubmit =(e) =>{
        e.preventDefault();
        // handleInputChange(e)
		//* Llamada post
		//* const response = fetch('api', {
		//*    method: 'POST',
		//*     headers: {
		//*         'Content-type': 'application/json'
        //*         'Authorization: jwt_token'
		//*    },
		//*     body: JSON.stringify(userData)
		//* })

        //database.push(...database, userData); //guarda el contenido de memoria state en el database (solo por ejemplo, la manera correcta es con un metodo push, path, post)
        const obj = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        setDataBase([...dataBase, obj]);

            
    };
    return(
        <form id="form" onSubmit={handleFormSubmit} >
            <h4 ref={titleRef}>Complete to Login</h4>
            <div className='input-email'>
                <label >Email:</label>
                <input 
                    type="text" 
                    autoComplete="false" 
                    name="username" 
                    ref={emailRef}
                />
            </div>
            <div className='input-password'>
                <label htmlFor="Password">Password:</label>
                <input 
                type="password" 
                    autoComplete="false" 
                    name="password" 
                    ref={passwordRef}
                />    
            </div>
                <div className="button-form">
                <button className="login-button">Login</button>
            </div>
        </form>        
    );
};
export default LoginForm;