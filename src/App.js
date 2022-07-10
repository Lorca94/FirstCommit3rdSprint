import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/dashboard";

import { Login } from './pages/Login/Login'
import { Registro } from "./pages/Registro/Registro";
import { FichaAlumno } from "./pages/Alumnos/Alumnos";

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ficha/:id" element={<FichaAlumno />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
  
}

export default App