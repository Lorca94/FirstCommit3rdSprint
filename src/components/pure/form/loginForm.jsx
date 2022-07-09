import React, { useRef } from 'react';
import Copyright from '../../../copyright/copyRight';
import { User } from '../../../models/user.class';

const Loginform = ( logging ) => {

    const emailRef = useRef('')
    const passwordRef = useRef('')

    function logginUser(e) {
        e.preventDefault();
        const user = new User(
            emailRef.current.value,
            passwordRef.current.value
        )
        logging(user);
    }

    return (
        <div>
            <div className='login-form__background'>
                <div  className='login-form'>
                    <label className='login-form__titulo'>OpenBootcamp <span style={{color:"#32D4A4"}}>| Alumnos</span></label>
                    <form>
                        <div className='login-form__formulario form-outline flex-fill login-form__form'>
                            <label>Email</label>
                            <input ref={ emailRef } id={'email-ref'} type={'text'} placeholder='Introduce tu email' 
                            required autoFocus className='form-control justify-content-center align-items-center'></input>

                            <label>Contraseña</label>
                            <input ref={passwordRef} id={'password-ref'} type={'password'} placeholder='Introduce tu contraseña'
                            required  className='form-control justify-content-center align-items-center'></input>
                        </div>

                        <div className='login-form__recuerdame'>
                            <div className='login-form__recuerdame-check'>
                                <input type={"checkbox"} id='login-form-checkbox'></input>
                                <label>Recuerdame</label>
                            </div>
                            
                            <a href='#'>He olvidado mi contraseña</a>
                        </div>

                        <button className='login-form__boton' onClick={ logginUser }>Iniciar Sesion</button>
                    </form>
                </div>
                <div className='login-form__politica'>
                    <Copyright></Copyright>
                </div>
            </div>        
        </div>
        
    );
}

export default Loginform;
