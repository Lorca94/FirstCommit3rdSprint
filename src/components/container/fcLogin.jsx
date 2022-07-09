import React, { useState } from 'react';
import { User } from '../../models/user.class';
import '../../styles/login-form.scss'
import Loginform from '../pure/form/loginForm'

const Fclogin = () => {
    const defaultUser = new User("admin@admin.com","1234");


    function loggingUser(user){
        console.log("entrando en logging");
        if( defaultUser.email === user.email && defaultUser.password === user.password){
            alert("Coincide")
        } else {
            alert("No coincide")
        }
    }

    return (
        <div className='login-form__main'>

            <div className='login-form__form-login col-5'>
                <Loginform
                logging ={ loggingUser }
                ></Loginform>
            </div>

            <div className='col-7 login-form__fondo'>

            </div>
        </div>
    );
}

export default Fclogin;
