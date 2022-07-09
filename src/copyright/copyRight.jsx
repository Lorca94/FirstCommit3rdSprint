import React from 'react';
import {Link, Typography} from '@mui/material'
const Copyright = () => {
    return (
        <div>
            <Typography variant="body2" color="GrayText" align='selft-start'>
                {'Copyright © 2021 Open Bootcamp SL, Imagina Group'}
            </Typography>
            <Typography variant="body2" color="GrayText">
                {'Todos los derechos reservados\n'}
            </Typography>

            <Link color="inherit" href='https://imaginaformacion.com' variant="body2">
                Política de Privacidad
            </Link>
        </div>
    );
}

export default Copyright;
