import Login from "./components/Login";
import React, { useState } from 'react';



import Listar from "./components/Listar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import Crear from "./components/Crear";
import Editar from "./components/Editar";


function App() {

  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav">

          <Link className="nav-item nav-link active" to={"/"}>Lista</Link>

        </div>
      </nav>

      <div className="container">


        <Route exact path="/" component={Listar}></Route>
        <Route path="/Crear" component={Crear}></Route>
        <Route path="/Editar/:id" component={Editar}></Route>
      </div>
    </Router>
  );


  // const [idRol, setIdRol] = useState(false);

  // const acceder = (estado) => {
  //   setIdRol(estado)
  // }

  // console.log("idrol",idRol);  
  //   const project =() =>{
  //     switch(idRol){
  //       case 1: return <Abm/>;
  //       case 2: return <Estacionamiento/>;

  //       default: return <h1>Error...</h1>
  //     }
  //   }  


  //   return (
  //     <>

  //     {
  //       (idRol) 
  //       ? project() 
  //       : <Login acceder={acceder} />
  //     }
  //     </>

  //   );
}

export default App;
