export class Candidato {
    nombreCompleto = '';
    pais= '';
    ciudad='';
    numTelefono = '';
    email = '';
    presencialidad = Boolean;
    traslado = Boolean;
    fotoPerfil = '';
    curriculum = '';
    etiquetas = [];

    constructor( nombreCompleto, pais, ciudad, numTelefono, email,etiquetas,presencialidad,traslado){
        this.nombreCompleto = nombreCompleto;
        this.pais = pais;
        this.ciudad = ciudad;
        this.numTelefono=numTelefono;
        this.email=email;
        this.etiquetas=etiquetas;
        this.presencialidad=presencialidad;
        this.traslado=traslado;
    }

    setFotoPerfil (fotoPerfil){
        this.fotoPerfil=fotoPerfil;
    }

    setCurriculum (curriculum){
        this.curriculum=curriculum;
    }
}