import React from 'react';

import { Link } from "react-router-dom";
import Api from "../servicios/Api";
import ApiEstacionar from '../servicios/ApiEstacionar';
import ApiConsultarUsuario from '../servicios/ApiConsultarUsuario';
import '../css/listarestacionamiento.css';

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
        
        fetch(ApiEstacionar+"?desestacionar"+"&idUsuario="+idUsuario)
            .then(respuestaUsuario => respuestaUsuario.json())
            .then((datosRespuestaUsuarios) => {
                console.log(datosRespuestaUsuarios);
                this.cargarDatosUsuarios();
            })
            .catch(console.log)

            alert('Usted ha dejado el estacionamiento.');
    }



    render() {

        console.log("PROPS: ",this.props);

        const { datosCargados, playadeestacionamiento } = this.state
        const { datosCargadosUsuarios } = this.state

        if (!datosCargados && !datosCargadosUsuarios) { return (<div>Cargando...</div>); }
        else {

            return (

                <div className="tbl-header">
                    <table cellPadding="0" cellSpacing="0" border="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Ubicacion</th>
                                <th>Lugares Libres</th>
                                <th>Observaciones</th>
                                <th></th>
                            </tr>
                        </thead>
                    </table>
                    <div className="tbl-content">
                        <table cellPadding="0" cellSpacing="0" border="0">
                            <tbody>

                                {
                                    playadeestacionamiento.map(
                                        (estacionamiento) => (
                                            <tr key={estacionamiento.idPlayaDeEstacionamiento}>

                                                <td>{estacionamiento.nombrePlayaDeEstacionamiento}</td>
                                                <td>{estacionamiento.ubicacion}</td>
                                                <td>{estacionamiento.lugaresLibres}</td>
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
                        </table>


                    </div>
                    <div className="card-footer text-muted">
                        <button type="button" className="btn btn-danger"
                            onClick={() => this.desestacionar(this.props.usuario.idUsuario)}>Desestacionar</button>
                    </div>
                </div>



            );

        }
    }
}

export default ListarEstacionamientos;