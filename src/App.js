import Login from "./components/Login";
import React, { useState } from 'react';


import Estacionamiento from "./components/Estacionamiento";
import Abm from "./components/Abm";



function App() {
  const [idRol, setIdRol] = useState(false);
  const acceder = (estado) => {
    setIdRol(estado)
  }

  const project = () => {
    switch (idRol) {
      case 1: return <Abm />;
      case 2: return <Estacionamiento />;

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
