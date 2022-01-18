import React from 'react';

import { Link } from "react-router-dom";
import Api from "../servicios/Api";

class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            playadeestacionamiento: []
        };
    }

    borrarRegistros = (idPlayaDeEstacionamiento) => {
        console.log(idPlayaDeEstacionamiento);
        fetch(Api+"?borrar="+idPlayaDeEstacionamiento)
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
                <div className="card">
                    <div className="card-header">
                      <Link className="btn btn-success" to={"/CrearEstacionamiento"}>➕ Agregar</Link> 
                    </div>
                    <div className="card-body">
                        <h4>Lista de Estacionamientos</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Ubicacion</th>
                                    <th>Capacidad</th>
                                    <th>Observaciones</th>
                                    
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    playadeestacionamiento.map(
                                        (estacionamiento) => (
                                            <tr key={estacionamiento.idPlayaDeEstacionamiento}>
                                                <td>{estacionamiento.idPlayaDeEstacionamiento}</td>
                                                <td>{estacionamiento.nombrePlayaDeEstacionamiento}</td>
                                                <td>{estacionamiento.ubicacion}</td>
                                                <td>{estacionamiento.capacidad}</td>
                                                <td>{estacionamiento.observaciones}</td>
                                                
                                                <td>
                                                    <div className="btn-group" role="group" aria-label="">
                                                        <Link className="btn btn-warning" 
                                                        to={"/EditarEstacionamiento/"+estacionamiento.idPlayaDeEstacionamiento}                                                        
                                                        >Editar</Link>

                                                        <button type="button" className="btn btn-danger" 
                                                          onClick={()=> this.borrarRegistros(estacionamiento.idPlayaDeEstacionamiento)}>Borrar</button>
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

export default Listar;