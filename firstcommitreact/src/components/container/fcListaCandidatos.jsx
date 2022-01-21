import React, { useEffect, useState } from 'react';
import { Candidato } from '../../models/candidato.class';
import Purecandidatoslist from '../pure/pureCandidatosList';
import { User } from '../../models/user.class';
import '../../styles/candidatos-list.scss'
import { useRef } from 'react';


//Este componente mantendrá la lógica de lo relacionado con CandidatosPage
const Fclistacandidatos = () => {
    /**
     * Sirve para abrir y cerrar el modal de registro
     */

    const [active, setActive] = useState(false)
    const modal = () => {
        console.log(active)
        setActive(!active)
    }
    const nombreRef = useRef('')
    const paisRef = useRef('')
    const ciudadRef = useRef('')
    const telefonoRef = useRef('')
    const emailRef = useRef('')
    const etiquetasRef = useRef('')
    const presencialidadRef = useRef('')
    const trasladoRef = useRef('')


    //Registrar candidato
    function nuevoCandidato(e){
        e.preventDefault();
        //Instanciamos y pasamos datos al nuevo candidato
        const newCandidato = new Candidato(
            nombreRef.current.value,
            paisRef.current.value,
            ciudadRef.current.value,
            telefonoRef.current.value,
            emailRef.current.value,
            etiquetasRef.current.value,
            presencialidadRef.current.value,
            trasladoRef.current.value
        );
        //se usa una variable temporal para almacenar todos los candidatos
        const tempCandidatos = [...candidatosList];
        tempCandidatos.push(newCandidato);
        setCandidatosList(tempCandidatos);
    }

    const userDefault = new User("username","admin@admin.com","password");
    //Añado tareas por defecto para comprobar el funcionamiento
    const defaultCandidato1 = new Candidato("Nombre De Prueba3","España","Valencia","+34 654 21 31 23","ejemplo1@ejemplo.com","HTML", true, false)
    const defaultCandidato2 = new Candidato("Nombre De Prueba4","España","Murcia","+34 654 21 31 23","ejemplo2@ejemplo.com","JAVA", true, false);
    const defaultCandidato3 = new Candidato("Nombre De Prueba1","España","Madrid","+34 654 21 31 23","ejemplo3@ejemplo.com", "SPRING", true, false);
    const defaultCandidato4 = new Candidato("Nombre De Prueba2","España","Barcelona","+34 654 21 31 23","ejemplo4@ejemplo.com","REACT", true, false);

    //candidatosList contendrá todos los candidatos de la lista
    const [candidatosList, setCandidatosList] = useState([defaultCandidato1,defaultCandidato2,defaultCandidato3,defaultCandidato4]);

    //useEffect (Ciclo de vida del componente)
    useEffect(() => {
        
    }, [candidatosList])

    function ordenarTabla(){
        //Guardamos candidatos en una variable temporal
        let tempCandidatos = [...candidatosList];

        tempCandidatos.sort((a, b) => {
            if (a.nombreCompleto < b.nombreCompleto) {
                return -1;
            }
            if (a.nombreCompleto > b.nombreCompleto) {
                return 1;
            }
            return 0;
        });
        setCandidatosList(tempCandidatos)
    }
    
    const TablaCandidatos = () => {
        return(
        <table className='tabla-candidatos' id="tabla-candidatos">
            <thead>
                <tr>
                    <th onClick={ordenarTabla} scope='col' >Nombre</th>
                    <th scope='col' >Ciudad</th>
                    <th scope='col' >País</th>
                    <th scope='col' >Telefono</th>
                    <th scope='col'>Correo Electrónico</th>
                    <th scope='col' >ETIQUETAS</th>
                </tr>
            </thead>

            <tbody>
                { candidatosList.map((candidato, index) => {

                    return(
                        <Purecandidatoslist
                        key={index}
                        candidato={candidato}
                        >
                        </Purecandidatoslist>

                        
                    )
                }) }
            </tbody>
        </table>
        )
    }

    const Modalregistro = () => {
        return (
            <form className='modal-nuevo-candidato'  onSubmit={nuevoCandidato}>
                <div className="modal-registro">
                    <div className='modal-registro-header'>
                        <h6> Nuevo Alumno</h6>
                        <i onClick={modal} className='bi bi-x-circle'></i>
                    </div>
                    <div className='modal-registro-info'>
                        <div className='form-obligatorio'>
                            <div className='form-obligatorio__nombre'>
                                <label>Nombre y Apellidos</label>
                                <input ref={nombreRef} className='form-control' required placeholder='Ej: Juan Perez Lorca' type='text' id='nombre-completo'/>
                            </div>

                            <div className='form-obligatorio__fila'>
                                <div className='form-obligatorio__fila-componentes-izquierda'>
                                    <label>Pais</label>
                                    <select name='pais' id='form-pais' ref={paisRef}>
                                        <option default disabled required>Elige un país</option>
                                        <option value="España">España</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Mexico">Mexico</option>
                                    </select>
                                </div>

                                <div className='form-obligatorio__fila-componentes-derecha'>
                                    <label>Ciudad</label>
                                    <select name='ciudad' id='form-ciudad' ref={ciudadRef}>
                                        <option default disabled required>Elige una ciudad</option>
                                        <option>Madrid</option>
                                        <option>Barcelona</option>
                                        <option>Valencia</option>
                                    </select>
                                </div>
                            </div>

                            <div className='form-obligatorio__fila'>
                                <div className='form-obligatorio__fila-componentes-izquierda'>
                                        <label>Teléfono</label>
                                        <input className='form-control ' required placeholder='Ej: + 34 XXX XX XX XX' type='text' id='num-telefono' ref={telefonoRef}/>
                                </div>
                                <div className='form-obligatorio__fila-componentes-derecha'>
                                        <label>Email</label>
                                        <input className='form-control' required placeholder='Ej: + 34 XXX XX XX XX' type='email' id='email' ref={emailRef}/>
                                </div>
                            </div>

                            <div className='form-obligatorio__fila'>
                                <div className='form-obligatorio__fila-componentes-izquierda'>
                                    <label>Presencialidad</label>
                                    <select required name="presencialidad" id='form-presencialidad' ref={presencialidadRef}>
                                        <option required default disabled >Elige una opción</option>
                                        <option>Sí</option>
                                        <option>No</option>
                                    </select>
                                </div>
                                <div className='form-obligatorio__fila-componentes-derecha'>
                                    <label>Traslado</label>
                                    <select required name="traslado" id='form-traslado' ref={trasladoRef}>
                                        <option default disabled required>Elige una opción</option>
                                        <option>Sí</option>
                                        <option>No</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <div className='form-opcional'>
                            <div className='form-opcional-columna'>
                                <div className='form-opcional-fila-perfil'>
                                    <label style={{fontWeight:"bold"}}>Foto Perfil</label>
                                    <button className='btn btn-secondary btn-lg'><i className='bi bi-cloud-arrow-up'>Subir imagen</i></button>
                                </div>
                                <div className='form-opcional-fila'>
                                    <p>Archivos soportados: <span style={{fontWeight:"bold"}}> .png, .jpg, y .jpeg</span><br></br>
                                    Tamaño de archivo máximo:<span style={{fontWeight:"bold"}}>2 MB</span> </p>
                                </div>
                            </div>
                            <div className='form-opcional-columna'>
                                <div className='form-opcional-fila'>
                                    <label style={{fontWeight:"bold"}}>Documento CV</label>
                                    <button className='btn btn-secondary btn-lg'><i className='bi bi-cloud-arrow-up'>Subir documento PDF</i></button>
                                </div>
                                <div className='form-opcional-fila'>
                                    <p>Archivos soportados: <span style={{fontWeight:"bold"}}> .pdf</span>
                                    <br></br>Tamaño de archivo máximo:<span style={{fontWeight:"bold"}}>20 MB</span></p>

                                </div>
                            </div>
                            <div className='form-opcional-columna'>
                                <div className='form-opcional-fila'>
                                    <label style={{fontWeight:"bold"}}>Etiquetas</label>
                                    <input required type="search" name="busquedaetiquetas" list="listaetiquetas" placeholder="  Escribe para buscar" ref={etiquetasRef}/>
                                    <datalist id="listaetiquetas">
                                        <option value="HTML&CSS"/>
                                        <option value="React"/>
                                        <option value="Sprint"/>
                                        <option value="Java"/>
                                    </datalist>
                                </div>
                            </div>
                        </div>


                    </div>
                
                </div>
                <div className='modal-save'>
                    <button type="submit" className='btn btn-success btn-lg '>Guardar</button>
                    <button className='btn btn-danger btn-lg' onClick={modal}>Cancelar</button>
                </div>
            </form>
        )
    }

    let imprimirTabla;
    imprimirTabla = <TablaCandidatos></TablaCandidatos>

    return (
        <div>
            <div className='candidatos-header'>
                <div className='candidatos-header__titulo'>
                    <label className='titulo-nombre'>OpenBootcamp <span style={{color:'#32D5A4'}}>|Alumnos</span></label>
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

            <div className='candidatos-body'>
                <div className='candidatos-tabla-filtro'>
                    <div className='candidatos-tabla'>
                        <div className='candidatos-tabla__nombre-add'>
                            <div className='candidatos-tabla__nombre-add__filtro-rapido'>
                                <label>Alumnos</label>
                                <input id="filtro-rapido" placeholder='Buscar por Nombre, Email o Palabra clave...'></input>
                            </div>
                            <button onClick={modal}><i className='bi bi-plus-lg'> Añadir Alumno</i></button>
                            
                        </div>
                        <div className='candidatos-tabla__tabla'>
                            { imprimirTabla }
                        </div>
                    </div>

                    <div className='candidatos-filtro'>

                    </div>
                </div>

            </div>
            {/* Mostrará o no el modal de candidatos, dependiendo del valor de modalNuevoContacto */}
            { active ? 
                <Modalregistro></Modalregistro> 
            : 
            null
            }
        </div>
    );
}

export default Fclistacandidatos;
