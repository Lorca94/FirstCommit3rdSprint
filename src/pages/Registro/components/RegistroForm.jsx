import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { DefaultInput } from "../../../shared/components/inputs/defaultInput";
import { useNavigate } from "react-router";

export const RegistroForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validateRegister = Yup.object().shape({
    email: Yup.string()
      .email("Introduce una dirección de correo válida.")
      .required("Introduce una dirección de correo.")
      .typeError("Introduce una dirección de correo."),
    password: Yup.string()
      .required("Introduce una contraseña.")
      .typeError("Introduce tu contraseña."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir.")
      .required("Las contraseñas deben coincidir."),
  });

  const onRegister = (values) => {
    navigate("/dashboard");
  };

  return (
    <div className="full-center-page">
      <div className="form-registro">
        <h1>
          {" "}
          OpenbootCamp <span className="primary-color">| Alumnos</span>
        </h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validateRegister}
          onSubmit={onRegister}
        >
          {(formik) => {
            const { handleSubmit } = formik;

            return (
              <Form onSubmit={handleSubmit}>
                <div style={{ width: "80%" }} className="form-control">
                  <DefaultInput
                    showValidation="false"
                    label="email"
                    name="email"
                    type="email"
                    placeholder="Introduce tu correo electrónico"
                  />
                  <DefaultInput
                    label="Contraseña"
                    name="password"
                    type="password"
                    placeholder="Introduce tu constraseña"
                  />
                  <DefaultInput
                    label="Confirmar contraseña"
                    name="confirmPassword"
                    type="password"
                    placeholder="Introduce tu constraseña"
                  />
                </div>
                <button className="btn btn-primary" type="submit">
                  Registrar
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
