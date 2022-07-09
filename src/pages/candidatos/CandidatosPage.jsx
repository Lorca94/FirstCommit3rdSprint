import React from 'react';
import Fclistacandidatos from '../../components/container/fcListaCandidatos';

const Candidatospage = () => {
    return (
        <div className='.candidatos-page-general'>

            <div>
                {<Fclistacandidatos></Fclistacandidatos>}
            </div>
                
        </div>
    );
}

export default Candidatospage;
