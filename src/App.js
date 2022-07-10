import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/dashboard";

import { Login } from "./pages/Login/Login";
import { Registro } from "./pages/Registro/Registro";
import { FichaAlumno } from "./pages/Alumnos/Alumnos";
// import { PrivateRoutes, PublicRoutes, AuthRouter, ApplicationRouter } from './shared/components/auth'

const App = () => {
  // const [logged, setLogged] = React.useState(false);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ficha/:id" element={<FichaAlumno />} />
        </Routes>
      </BrowserRouter>

      {/*
      Esta parte del código queda comentada, ya que no dispongo de un back para hacer el auth,
      ha quedado programada y comprobada con un back en local
      <BrowserRouter>
            <Routes>
                <Route
                path={'/login'}
                element={
                    <PublicRoutes logged={logged}>
                        <AuthRouter />
                    </PublicRoutes>
                }
                />
                <Route
                path={'/dashboard'}
                element={
                    <PrivateRoutes logged={logged}>
                        <ApplicationRouter />
                    </PrivateRoutes>
                }
                />
            </Routes> 
        </BrowserRouter>
              */}
    </div>
  );
};

export default App;
