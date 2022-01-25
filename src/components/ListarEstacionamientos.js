import React from 'react';

import { Link } from "react-router-dom";
import Api from "../servicios/Api";
import ApiEstacionar from '../servicios/ApiEstacionar';
import ApiConsultarUsuario from '../servicios/ApiConsultarUsuario';

class ListarEstacionamientos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            datosCargadosUsuarios: false,
            playadeestacionamiento: [],
            usuarios: []
            

        };
    }

    cargarDatos() {
        fetch(Api)
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta);
                this.setState({ datosCargados: true, playadeestacionamiento: datosRespuesta })
            })
            .catch(console.log)
    }

    cargarDatosUsuarios() {
        fetch(ApiConsultarUsuario)
            .then(respuestaUsuario => respuestaUsuario.json())
            .then((datosRespuestaUsuarios) => {
                console.log(datosRespuestaUsuarios);
                this.setState({ datosCargadosUsuarios: true, usuarios: datosRespuestaUsuarios })
            })
            .catch(console.log)
            
    }

    componentDidMount() {
        this.cargarDatos();
    }

    componentDidMountUsuarios() {
        this.cargarDatosUsuarios();
               
    }

    


    desestacionar = (idUsuario) => {
        console.log(this.props.location.idUsuario);
        fetch(ApiEstacionar + "?desestacionar" + "&idUsuario=" + idUsuario)
            .then(respuestaUsuario  => respuestaUsuario .json())
            .then((datosRespuestaUsuarios) => {
                console.log(datosRespuestaUsuarios);
                this.cargarDatosUsuarios();
            })
            .catch(console.log)
    }

    render() {

        const { datosCargados, playadeestacionamiento } = this.state
        const { datosCargadosUsuarios, usuarios } = this.state

        if (!datosCargados && !datosCargadosUsuarios) { return (<div>Cargando...</div>); }
        else {

            return (
                <div className="card">
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>

                                    <th>Nombre</th>
                                    <th>Ubicacion</th>
                                    <th>Capacidad</th>
                                    <th>Observaciones</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    playadeestacionamiento.map(
                                        (estacionamiento) => (
                                            <tr key={estacionamiento.idPlayaDeEstacionamiento}>

                                                <td>{estacionamiento.nombrePlayaDeEstacionamiento}</td>
                                                <td>{estacionamiento.ubicacion}</td>
                                                <td>{estacionamiento.capacidad}</td>
                                                <td>{estacionamiento.observaciones}</td>

                                                <td>
                                                    <div className="btn-group" role="group" aria-label="">
                                                        <Link className="btn btn-warning"
                                                            to={"/VerEstacionamiento/" + estacionamiento.idPlayaDeEstacionamiento}
                                                        >Ver</Link>

                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    )
                                }                           
                            </tbody>
                            
                            
                            <button type="button" className="btn btn-danger"
                                 onClick={() => this.desestacionar()}>Desestacionar</button>

                        </table>
                    </div>
                    <div className="card-footer text-muted">

                    </div>
                </div>

            );

        }
    }
}

export default ListarEstacionamientos;