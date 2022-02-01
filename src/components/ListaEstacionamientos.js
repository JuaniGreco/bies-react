import React from 'react';

import AgregarEstacionamiento from "./AgregarEstacionamiento";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import VerEstacionamiento from "./VerEstacionamiento";
import EditarEstacionamiento from "./EditarEstacionamiento";
import '../css/login.css';
import Listar from './AgregarEstacionamiento';
import ListarEstacionamientos from './ListarEstacionamientos';


class ListaEstacionamiento extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        
    }

    
    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand navbar-light bg-light">
                    <div className="nav navbar-nav">
                        <Link className="nav-item nav-link active " to={"/"}>Estacionamientos</Link>
                    </div>
                </nav>

                <div className="container">
                    <Route exact path="/" component={ListarEstacionamientos}></Route>
                    <Route path="/VerEstacionamiento/:id" component={VerEstacionamiento}></Route>
                   
                </div>
            </Router>
            
        );
    }
}

export default ListaEstacionamiento;