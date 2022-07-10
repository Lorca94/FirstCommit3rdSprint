import React from "react";
import { Header } from "../../../shared/navigation/header/header";
import { TablaAlumnos } from "../components/tablaAlumnos";

export const DashboardPage = () => {
  return(
    <div>
      <header>
        <Header />
      </header>

      <main className="content-page dashboard">
        <div>
          <TablaAlumnos />
        </div>
      </main>
    </div>
  )
}