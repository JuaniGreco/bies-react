import Login from "./components/Login";
import React, { useState } from 'react';


import ListaEstacionamientos from "./components/ListaEstacionamientos";
import AbmEstacionamiento from "./components/AbmEstacionamiento";



function App() {
  const [idRol, setIdRol] = useState(false);
  const acceder = (estado) => {
    setIdRol(estado)
  }

  const project = () => {
    switch (idRol) {
      case 1: return <AbmEstacionamiento />;
      case 2: return <ListaEstacionamientos />;

      default: return <h1>Error...</h1>
    }
  }
  return (


    <>
      {
        (idRol)
          ? project()
          : <Login acceder={acceder} />
      }
    </>

  );
}

export default App;
