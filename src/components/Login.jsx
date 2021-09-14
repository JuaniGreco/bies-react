import React, { useRef } from 'react';
import '../css/login.css';

const URL_LOGIN ="http://localhost/bies-react/login.php";


const enviarData = async (url, data) => {
    
    const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    console.log(resp);
    const json = await resp.json();
    console.log(json);
}

export default function Login(props) {

    const refDni = useRef(null);
    const refClave = useRef(null);

    const handleLogin = () => {
        const data = {
            "dni": refDni.current.value,
            "clave": refClave.current.value
        };
        console.log(data);
        enviarData(URL_LOGIN, data);
    }

    return (
        <div className="login">
            <div className="row">
                <div className="col-sm-4 offset-4  mt-5">
                    <div className="card pt-5">
                        <div className="card-header">
                            Ingreso
                        </div>
                        <div className="card-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    @
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ingrese su DNI"
                                    aria-label="dni"
                                    aria-describedby="basic-addon1"
                                    ref={refDni}
                                />
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon2">
                                    @
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

                            <button
                                onClick={handleLogin}
                                className="btn btn-info btn-lg btn-block">Acceder</button>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}