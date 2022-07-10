import React from "react";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login__form">
        <LoginForm />
      </div>
      <div className="login__bg" />
    </div>
  );
};

export default LoginPage;
