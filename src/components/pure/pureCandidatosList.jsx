import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//Models
import { Candidato } from '../../models/candidato.class';
import '../../styles/candidatos-list.scss'

const Purecandidatoslist = ({ candidato }) => {

    //Control del ciclo de vida 
    useEffect(() => {
        
    }, [candidato]);

    return (
        <tr>
            <td>
                { candidato.nombreCompleto }
            </td>

            <td>
                { candidato.ciudad }
            </td>

            <td>
                { candidato.pais }
            </td>

            <td>
                { candidato.numTelefono }
            </td>

            <td>
                { candidato.email }
            </td>

            <td>
                <h6><span className='badge bg-success'>{candidato.etiquetas}</span></h6>
            </td>
        </tr>


    );
}


Purecandidatoslist.propTypes = {
    candidato: PropTypes.instanceOf(Candidato).isRequired

};

export default Purecandidatoslist;
