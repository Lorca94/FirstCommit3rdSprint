import React from 'react';
import {useLocation, useHistory, useParams} from 'react-router-dom';
import { User } from '../../models/user.class';
import '../../styles/candidatos-list.scss'
import imageDefault from '../../img/desconocido.jpg'
import pdfDefault from '../../img/First_Commit.pdf'
import { Candidato } from '../../models/candidato.class';
import { Document, Page } from 'react-pdf';

const Candidatosdetallepage = ({  }) => {
    const userDefault = new User("username","admin@admin.com","password");
    const location = useLocation();
    const history = useHistory();
    const id = useParams();
    const candidato = new Candidato("Nombre De Prueba3","España","Valencia","+34 654 21 31 23","ejemplo1@ejemplo.com","HTML", true, false)

    const goBack = ()=> {
        history.goBack();
    }

    const etiquetaSeleccionada = [];

    return (
        <div>
          <div className='candidatos-header'>
                <div className='candidatos-header__titulo'>
                    <i style={{cursor:"pointer"}} onClick={goBack} className='bi bi-arrow-left'> <h7>Volver</h7></i>
                </div>
                              
                <div className='candidatos-header__desplegable'>
                    <div className='candidatos-header__desplegable--nombre'>
                        <div className='candidatos-header__desplegable--circulo'>
                            <label>NA</label>
                        </div>
                        <h5>{ userDefault.username }</h5>
                    </div>
                    <i className="bi bi-caret-down"></i>
                </div>
            </div>
            <div className='candidato-detalle-container'>
                <div className='candidato-detalle-body'>
                    <div className='detalle-candidato-info'>
                        <div className='detalle-candidato-img'>
                            <img alt='Foto Alumno' src={imageDefault} height={"90px"} width={"90px"}></img>
                            <div className='detalle-candidato-img-info'>
                                <h3>{candidato.nombreCompleto}</h3>
                                <div className='detalle-candidato-img-ciudad'>
                                    <i className='bi bi-geo-alt'></i>
                                    <label>{candidato.ciudad}</label>
                                    <label>|</label>
                                    <label>{candidato.pais}</label>
                                </div>
                            </div>
                            
                        </div>
                        <div className='detalle-candidato-info-todo'>
                            <div className='detalle-candidato-info-todo-nombre'>
                                <label>Nombre y apellidos</label>
                                <input disabled value={candidato.nombreCompleto}></input>
                            </div>
                            <div className='detalle-candidato-info-todo-fila'>
                                <div className='detalle-candidato-info-todo-columna-izq'>
                                    <label>Nº Teléfono</label>
                                    <input disabled value={candidato.numTelefono}></input>
                                </div>
                                <div className='detalle-candidato-info-todo-columna-der'>
                                    <label>Email</label>
                                    <input disabled value={candidato.email}></input>
                                </div>
                            </div>

                            <div className='detalle-candidato-info-todo-fila'>
                                <div className='detalle-candidato-info-todo-columna-izq'>
                                    <label>Pais</label>
                                    <input disabled value={candidato.pais}></input>
                                </div>
                                <div className='detalle-candidato-info-todo-columna-der'>
                                    <label>Ciudad</label>
                                    <input disabled value={candidato.ciudad}></input>
                                </div>
                            </div>

                            <div className='detalle-candidato-info-todo-fila'>
                                <div className='detalle-candidato-info-todo-columna-izq'>
                                    <label>Traslado</label>
                                    {
                                        candidato.traslado ? 
                                        <input disabled value="Sí"></input>
                                        :
                                        <input disabled value="No"></input>
                                    }
                                </div>
                                <div className='detalle-candidato-info-todo-columna-der'>
                                    <label>Presencialidad</label>
                                    {
                                        candidato.presencialidad ? 
                                        <input disabled value="Sí"></input>
                                        :
                                        <input disabled value="No"></input>
                                    }
                                </div>
                            </div>
                            <div className='detalle-candidato-info--pdf'>
                                <label>Documento CV</label>
                                <div className='detalle-candidato-info--abajo-pdf'>
                                    <button><i className='bi bi-cloud-arrow-up'> Subir de nuevo</i></button>
                                    <button><i className='bi bi-trash'> Subir de nuevo</i></button>
                                </div>
                            </div>

                            <div className='detalle-candidato-info--pdf'>
                                <label>Etiquetas</label>
                                <input className="buscador" id="buscador" type="search" name="busquedaetiquetas" list="listaetiquetas" placeholder="  Escribe para buscar"/>
                                <datalist id="listaetiquetas">
                                    <option value="HTML&CSS">HTML&CSS</option>
                                    <option value="REACT">REACT</option>
                                    <option value="SPRINT">SPRINT</option>
                                    <option value="JAVA">JAVA</option>
                                </datalist>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='candidato-detalle-pdf'>
                    <Document file={pdfDefault}></Document>
                </div>
            </div>
        </div>
    );
}

export default Candidatosdetallepage;
