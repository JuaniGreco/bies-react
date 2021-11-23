import React from 'react';

import { Link } from "react-router-dom";
import Api from "../servicios/Api";

class Estacionamiento extends React.Component {
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
                                    <th>Mapa</th>
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
                                                <td>{estacionamiento.mapa}</td>
                                                <td>
                                                    {/* <div className="btn-group" role="group" aria-label="">
                                                        <Link className="btn btn-warning" 
                                                        to={"/Editar/"+estacionamiento.idPlayaDeEstacionamiento}                                                        
                                                        >Editar</Link>

                                                        <button type="button" className="btn btn-danger" 
                                                          onClick={()=> this.borrarRegistros(estacionamiento.idPlayaDeEstacionamiento)}>Borrar</button>
                                                    </div> */}
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

/*import React from 'react';

class Estacionamiento extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <table class="table">
            <thead>
                <tr>
                    <th>N Estacionamiento</th>
                    <th>nombre</th>
                    <th>direccion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">1</td>
                    <td>Alvear</td>
                    <td>Alvear 2823</td>
                </tr>
                
            </tbody>
        </table> );
    }
}
 
export default Estacionamiento;*/