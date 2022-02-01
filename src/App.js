import Login from "./components/Login";
import React, { useState } from 'react';


import ListaEstacionamientos from "./components/ListaEstacionamientos";
import AbmEstacionamiento from "./components/AbmEstacionamiento";
import VerEstacionamiento from "./components/VerEstacionamiento";



function App() {
  const [idRol, setIdRol] = useState(false);
  const acceder = (estado) => {
    setIdRol(estado)
  }

  const [idUsuario, setIdUsuario] = useState(false);
  const acceder2 = (estado2) => {
    setIdUsuario(estado2)
  }
  console.log("IDUSUARIOLOG: ",idUsuario);
  console.log("IDROL: ", idRol)

  const project = () => {
    switch (idRol) {
      case 1: return <AbmEstacionamiento />;
      case 2: return <ListaEstacionamientos acceder2={acceder2}/>;

      default: return <h1>Error...</h1>
    }
    
  }
  return (


    <>
      {
        (idRol)
          ? project()
          : <Login acceder={acceder} acceder2={acceder2}/>
          
      }

      
      
    </>

  );
}

export default App;
