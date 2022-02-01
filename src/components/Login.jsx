import React, { useRef, useState } from 'react';
import '../css/login.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CrearUsuario from './CrearUsuario';
import logo from '../imagenes/B-IES.ico'


const URL_LOGIN = "http://localhost/bies-react/login.php";


const enviarData = async (url, data) => {

    const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    //console.log(resp);
    const json = await resp.json();
    //console.log(json);

    return json;
}



export default function Login(props) {

    const refDni = useRef(null);
    const refClave = useRef(null);
    


    const handleLogin = async () => {
        const data = {
            "dni": refDni.current.value,
            "clave": refClave.current.value
        };
        console.log(data);
        const respuestaJson = await enviarData(URL_LOGIN, data);
        console.log("respuesta", respuestaJson);

        props.acceder(respuestaJson.idRol) //obtengo el idRol del usuario
        props.acceder2(respuestaJson.idUsuario)//obtengo el idUsuario del usuario   
        
        
    }



    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">

                <div className="fadeIn first">
                    <img src={logo} id="icon" alt="User Icon" />
                </div>

                <div>
                    <div>
                        <span className="fadeIn second" id="basic-addon1">
                            ✔️
                        </span>
                        <input
                            type="text_diseño"
                            className="form-control"
                            placeholder="Ingrese su DNI"
                            aria-label="dni"
                            aria-describedby="basic-addon1"
                            ref={refDni}
                        />
                    </div>

                    <div>
                        <span className="fadeIn third" id="basic-addon2">
                            🔒
                        </span>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Ingrese su contraseña"
                            aria-label="password"
                            aria-describedby="basic-addon2"
                            ref={refClave}
                        />
                    </div>
                    <br></br>
                    <div className='fadeIn fourth'>
                        <button
                            onClick={handleLogin}
                            className="btn btn-outline-primary">Iniciar sesión</button>

                    </div>

                    <div>
                        <Router>
                            <Route exact path="/CrearUsuario" component={CrearUsuario}></Route>
                            <a className="underlineHover" href="/CrearUsuario">Crear Usuario</a>
                        </Router>
                    </div>
                </div>
            </div>
        </div>
    )
}