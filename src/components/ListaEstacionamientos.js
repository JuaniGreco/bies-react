import React from 'react';


import { Route, BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import VerEstacionamiento from "./VerEstacionamiento";
import '../css/login.css';
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
                    <Route exact path="/" render={(props) => <ListarEstacionamientos usuario={this.props.usuario} />}></Route>
                    <Route path="/VerEstacionamiento/:id" render={(props) => <VerEstacionamiento usuario={this.props.usuario} {...props}/>}></Route>
                   
                </div>
            </Router>
            
        );
    }
}

export default ListaEstacionamiento;