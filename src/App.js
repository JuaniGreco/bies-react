import Login from "./components/Login";
import React, { useState } from 'react';

import Abm from "./components/Abm";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Estacionamiento from "./components/Estacionamientos";
import { render } from "@testing-library/react";

//prueba de commit


function App() {


  const [idRol, setIdRol] = useState(false);

  const acceder = (estado) => {
    setIdRol(estado)
  }

  console.log("idrol",idRol);

  
    const project =() =>{
      switch(idRol){
        case 1: return <Abm/>;
        case 2: return <Estacionamiento/>;

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
