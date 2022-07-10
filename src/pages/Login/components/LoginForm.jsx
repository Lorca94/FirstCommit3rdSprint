import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { login } from "../../../shared/middlewares/user/auth.middleware";

import { DefaultInput } from "../../../shared/components/inputs/defaultInput";
import { Button, Checkbox, FormControlLabel, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };

  const validateLogin = Yup.object().shape({
    email: Yup.string()
      .email("Introduce una dirección de correo válida.")
      .required("Introduce una dirección de correo.")
      .typeError("Introduce una dirección de correo."),
    password: Yup.string()
      .required("Introduce una contraseña.")
      .typeError("Introduce tu contraseña."),
    remember: Yup.boolean().notRequired().nullable(),
  });

  const submitLogin = (values) => {
    login(values.email, values.password);
    navigate("/dashboard");
  };

  return (
    <div className="login-form">
      <h1>
        OpenBootcamp <span style={{ color: "#32D4A4" }}>Alumnos</span>
      </h1>
      <Formik
        initialValues={initialValues}
        onSubmit={submitLogin}
        validationSchema={validateLogin}
      >
        {(formik) => {
          const { handleSubmit } = formik;

          return (
            <Form onSubmit={handleSubmit}>
              <div className="form-control">
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
              </div>

              <div className="form__recuerdame">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Recuerdame"
                  name="recuerdame"
                />
                <Link underline="none" style={{ cursor: "pointer" }}>
                  ¿Has olvidado tu contraseña?
                </Link>
              </div>

              <div style={{ marginTop: "36px" }} className="justify-spaced">
                <button
                  style={{ maxWidth: "160px" }}
                  className="btn btn-primary"
                  type="submit"
                >
                  Iniciar sesión
                </button>
                <button
                  style={{ maxWidth: "160px" }}
                  className="btn btn-ghost"
                  onClick={() => navigate("/registro")}
                >
                  Registrarse
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginForm;
