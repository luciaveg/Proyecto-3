import './RegisterForm.css';
import { useRef, useState } from 'react';

const RegisterForm = ()=>{

    const [dataBase, setDataBase] = useState([]);   // HOOK
    
    const nickNameRef = useRef();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


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
            nickName: nickNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        setDataBase([...dataBase, obj]);

            
    };
    return(
        <form id="form" onSubmit={handleFormSubmit} >
            <h4 ref={nickNameRef}>Complete to Register</h4>
            <div className='input-nickName'>
                <label >NickName:</label>
                <input 
                    type="text" 
                    autoComplete="false" 
                    name="NickName" 
                    ref={nickNameRef}
                />
            </div>
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
                <button className="login-button">Send</button>
            </div>
        </form>        
    );
};
export default RegisterForm;