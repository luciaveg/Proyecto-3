import ThemeContext from '../../context/authcontext';
import './UserForm.css';
import { useContext, useRef, useState } from 'react';

const UserForm = ()=>{

    const [dataBase, setDataBase] = useState([]);   // HOOK
    
    const titleRef = useRef();
    const userNameRef = useRef(null);
    const passwordRef = useRef(null);

    const {theme} = useContext(ThemeContext);


    const handleFormSubmit =(e) =>{
        e.preventeDefault();
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
            username: userNameRef.current.value,
            password: passwordRef.current.value,
        };
        setDataBase([...dataBase, obj]);

            
    };
    return(
        <form id="form" onSubmit={handleFormSubmit} className={theme}>
            <h4 ref={titleRef}>Form Title</h4>
            <div className='input-container'>
                <label >Username:</label>
                <input 
                    type="text" 
                    autoComplete="false" 
                    name="username" 
                    ref={userNameRef}
                />
            </div>
            <div className='input-container'>
                <label htmlFor="Password">Password:</label>
                <input 
                type="password" 
                    autoComplete="false" 
                    name="password" 
                    ref={passwordRef}
                />    
            </div>
                <div className="button-container">
                <button className="login-button">Login</button>
            </div>
        </form>        
    );
};
export default UserForm;