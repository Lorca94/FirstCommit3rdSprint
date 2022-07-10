import { Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { DefaultInput } from "../../../shared/components/inputs/defaultInput";

export const RegisterAlumno = () => {
  const navigate = useNavigate();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const initialValues = {
    nombreCompleto: "",
    email: "",
    telefono: "",
    pais: "",
    ciudad: "",
    certificaciones: [],
    presencialidad: "",
    experiencia: "",
  };
  const validate = Yup.object().shape({
    nombreCompleto: Yup.string(),
    email: Yup.string()
      .email("Introduce una dirección de correo válida.")
      .typeError("Introduce una dirección de correo."),
    telefono: Yup.string()
      .nullable()
      .matches(phoneRegExp, "El teléfono no es válido."),
    pais: Yup.string(),
    ciudad: Yup.string(),
    presencialidad: Yup.string(),
    experiencia: Yup.number(),
  });

  const onRegister = (values) => {};
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={onRegister}
      >
        {(formik) => {
          const { handleSubmit } = formik;

          return (
            <Form onSubmit={handleSubmit}>
              <div style={{ width: "80%" }} className="form-control">
                <DefaultInput
                  showValidation="false"
                  label="Nombre completo"
                  name="nombreCompleto"
                  type="text"
                  placeholder="Introduce tu nombre completo"
                />

                <DefaultInput
                  showValidation="false"
                  label="Correo electrónico"
                  name="email"
                  type="text"
                  placeholder="Introduce tu correo electrónico"
                />

                <DefaultInput
                  showValidation="false"
                  label="Número de teléfono"
                  name="telefono"
                  type="text"
                  placeholder="Introduce tu numero de teléfono"
                />

                <div style={{display:'flex',width:'100%',gap:'35px'}}>
                  <DefaultInput
                    showValidation="false"
                    label="País"
                    name="pais"
                    type="text"
                    placeholder="Introduce tu país de residencia"
                  />

                  <DefaultInput
                    showValidation="false"
                    label="Ciudad"
                    name="ciudad"
                    type="text"
                    placeholder="Introduce tu ciudad de residencia"
                  />
                </div>

                <DefaultInput
                  showValidation="false"
                  label="Años de experiencia IT"
                  name="experiencia"
                  type="number"
                  placeholder="Introduce tus años de experiencia"
                />

                <select className="select-alumnos">
                  <option>HTML/CSS</option>
                  <option>React</option>
                  <option>Java</option>
                  <option>Spring</option>
                </select>
                <div style={{display:'flex', width:'100%', justifyContent:'space-around'}}>
                  <button className="btn btn-primary" type="submit">Guardar alumno</button>
                  <button className="btn btn-ghost" type="button" onClick={()=>{window.location.reload();}}>Cancelar</button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
