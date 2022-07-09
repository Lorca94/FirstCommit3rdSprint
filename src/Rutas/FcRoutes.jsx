import React, { useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Login from '../pages/auth/LoginPage'
import Candidatosdetallepage from '../pages/candidatos/CandidatosDetallePage';
import Candidatospage from '../pages/candidatos/CandidatosPage';

function FcRoutes() {
    //TODO: Cambiar valores desde SessionStorage al hacer loggin con un api
    const loggedIn = true;


    return (
        <BrowserRouter>
         {/*Rutas*/}
            <Switch>
                {/*Redirección a login para proteger las rutas y controlar el acceso de usuarios*/}
                    <Route exact path='/'>
                    {
                        loggedIn ? 
                        (<Redirect from='/' to='/candidatos' />)
                        :
                        (<Redirect from='/' to='/login' />)
                    }
                    </Route>
                    {/* Ruta de Login */}
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/candidatos' component={Candidatospage}>
                    {
                        loggedIn ? 
                        (<Candidatospage>
                            
                        </Candidatospage>)
                        :
                        (<Redirect from='/' to='/login' />)
                    }
                    </Route>
                    <Route exact path='/nuevocandidato' component={Candidatosdetallepage}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default FcRoutes
