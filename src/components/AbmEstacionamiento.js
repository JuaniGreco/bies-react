import React from 'react';

import AgregarEstacionamiento from "./AgregarEstacionamiento";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import CrearEstacionamiento from "./CrearEstacionamiento";
import EditarEstacionamiento from "./EditarEstacionamiento";
import '../css/login.css';

class AbmEstacionamiento extends React.Component {
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
                    <Route exact path="/" component={AgregarEstacionamiento}></Route>
                    <Route path="/CrearEstacionamiento" component={CrearEstacionamiento}></Route>
                    <Route path="/EditarEstacionamiento/:id" component={EditarEstacionamiento}></Route>                   
                </div>
            </Router>

        );
    }
}

export default AbmEstacionamiento;