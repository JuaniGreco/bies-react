import React from 'react';

import { Link } from "react-router-dom";
import Api from "../servicios/Api";
import '../css/login.css';

class Estacionamiento extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            playadeestacionamiento: []
        };
    }

   
    ver = (idPlayaDeEstacionamiento) => {
        console.log(idPlayaDeEstacionamiento);
        fetch(idPlayaDeEstacionamiento)
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta);
                this.cargarDatos();
            })
            .catch(console.log)
    };

    cargarDatos() {
        fetch(Api)
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta);
                this.setState({ datosCargados: true, playadeestacionamiento: datosRespuesta })
            })
            .catch(console.log)
    }

    componentDidMount() {
        this.cargarDatos();
    }

    render() {

        const { datosCargados, playadeestacionamiento } = this.state

        if (!datosCargados) { return (<div>Cargando...</div>); }
        else {

            return (
                <div className="login">

                    <div className="card-body">
                        <h4 className='titulos'>Estacionamientos 🛑</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    {/* <th>ID</th> */}
                                    <th>Nombre</th>
                                    <th>Ubicacion</th>
                                    <th>Capacidad</th>
                                    <th>Observaciones</th>
                                    {/* <th>Mapa</th> */}
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    playadeestacionamiento.map(
                                        (estacionamiento) => (
                                            <tr key={estacionamiento.idPlayaDeEstacionamiento}>
                                                {/* <td>{estacionamiento.idPlayaDeEstacionamiento}</td> */}
                                                <td>{estacionamiento.nombrePlayaDeEstacionamiento}</td>
                                                <td>{estacionamiento.ubicacion}</td>
                                                <td>{estacionamiento.capacidad}</td>
                                                <td>{estacionamiento.observaciones}</td>
                                                {/* <td>{estacionamiento.mapa}</td> */}
                                                <td>
                                                    <div className="btn-group" role="group" aria-label="">
                                                        {/*<Link className="btn btn-warning" 
                                                        to={"/Editar/"+estacionamiento.idPlayaDeEstacionamiento}                                                        
                                                        >Editar</Link>*/}
                                                        <button type="button" className="btn btn-warning"
                                                            onClick={() => this.ver()}>Ver</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer text-muted">

                    </div>
                </div>

            );
        }
    }
}

export default Estacionamiento;