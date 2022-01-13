import React from 'react';

import Listar from "../components/Listar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import Crear from "../components/Crear";
import Editar from "../components/Editar";
import CrearUsuario from "../components/CrearUsuario";
import '../css/login.css';

class Abm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand navbar-light bg-light">
                    <div className="nav navbar-nav">
                        <Link className="nav-item nav-link active " to={"/"}>⚙️ABM</Link>
                    </div>
                </nav>

                <div className="container">
                    <Route exact path="/" component={Listar}></Route>
                    <Route path="/Crear" component={Crear}></Route>
                    <Route path="/Editar/:id" component={Editar}></Route>
                   
                </div>
            </Router>

        );
    }
}

export default Abm;