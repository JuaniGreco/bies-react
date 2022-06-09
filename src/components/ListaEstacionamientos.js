import React from 'react';
import { Route, BrowserRouter as Router, Redirect} from "react-router-dom";
import { Link } from "react-router-dom";
import VerEstacionamiento from "./VerEstacionamiento";
import '../css/login.css';
import ListarEstacionamientos from './ListarEstacionamientos';
import imagen_logo from '../imagenes/imagen_nav.png';
import { NavBar } from './NavBar';


class ListaEstacionamiento extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        
    }

    
    render() {
        return (
            <Router>
                {/* <nav className="navbar navbar-expand navbar-light bg-red">
                    <div className="nav navbar-nav">
                    <img src={imagen_logo} id="icon" alt="User Icon" />
                        <Link className="nav-item nav-link active " to={"/"}>BIES</Link>
                    </div>
                </nav> */}
                <NavBar />


                <div className="container">
                    <Route exact path="/" render={(props) => <ListarEstacionamientos usuario={this.props.usuario} />}></Route>
                    <Route path="/VerEstacionamiento/:id" render={(props) => <VerEstacionamiento usuario={this.props.usuario} {...props}/>}></Route>
                    <Route path="/*" render={() => <Redirect to="/" />}></Route>
                </div>
            </Router>
            
        );
    }
}

export default ListaEstacionamiento;