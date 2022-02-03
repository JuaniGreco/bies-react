
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Api from "../servicios/Api";
import '../css/login.css';
import ApiEstacionar from '../servicios/ApiEstacionar';



class VerEstacionamiento extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            datosCargados: false,
            estacionamiento: [],



        }
    }

    cambioValor = (e) => {
        const state = this.state.estacionamiento;

        state[e.target.name] = e.target.value;
        this.setState({ estacionamiento: state });
    }

    enviarDatos = (e) => {
        e.preventDefault();
        console.log("Formulario enviado");
        const { idPlayaDeEstacionamiento, nombrePlayaDeEstacionamiento, ubicacion, capacidad, observaciones, mapa } = this.state.estacionamiento;


        var datosEnviar = { idPlayaDeEstacionamiento: idPlayaDeEstacionamiento, nombrePlayaDeEstacionamiento: nombrePlayaDeEstacionamiento, ubicacion: ubicacion, capacidad: capacidad, observaciones: observaciones, mapa: mapa }

        fetch(Api + "?actualizar=1", {
            method: "POST",
            body: JSON.stringify(datosEnviar)

        })
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta);
                this.props.history.push("/");
            })
            .catch(console.log)
    }

    componentDidMount() {


        fetch(Api + "?consultar=" + this.props.match.params.id)
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta);
                this.setState({
                    datosCargados: true,
                    estacionamiento: datosRespuesta[0]
                })
            })
            .catch(console.log)
    }

    estacionar = (idPlayaDeEstacionamiento, idUsuario) => {


        console.log("IdUSUARIO:", idUsuario);
        fetch(ApiEstacionar + "?estacionar=" + idPlayaDeEstacionamiento + "&idUsuario=" + idUsuario)
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta);
                this.cargarDatos();
            })
            .catch(console.log)

            alert('Usted se ha estacionado.');
              
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

     



    render() {
        const { datosCargados, estacionamiento } = this.state
        if (!datosCargados) { return (<div>Cargando...</div>); }
        else {

            return (
                <div className="card">

                    <div className="card-body">


                        <form onSubmit={this.enviarDatos} >
                            <div className="form-group">
                                <label htmlFor="">Nombre:</label>
                                <input type="text" readOnly name="nombrePlayaDeEstacionamiento" id="nombrePlayaDeEstacionamiento" onChange={this.cambioValor} value={estacionamiento.nombrePlayaDeEstacionamiento} className="form-control" placeholder="" aria-describedby="helpId" />

                            </div>

                            <div className="form-group">
                                <label htmlFor="">Ubicacion:</label>
                                <input type="text" readOnly name="ubicacion" id="ubicacion" onChange={this.cambioValor} value={estacionamiento.ubicacion} className="form-control" placeholder="" aria-describedby="helpId" />

                            </div>

                            <div className="form-group">
                                <label htmlFor="">Capacidad:</label>
                                <input type="text" readOnly name="capacidad" id="capacidad" onChange={this.cambioValor} value={estacionamiento.capacidad} className="form-control" placeholder="" aria-describedby="helpId" />

                            </div>

                            <div className="form-group">
                                <label htmlFor="">Observaciones:</label>
                                <input type="text" readOnly name="observaciones" id="observaciones" onChange={this.cambioValor} value={estacionamiento.observaciones} className="form-control" placeholder="" aria-describedby="helpId" />

                            </div>

                            <br></br>
                            <div>
                                <a class="b_linkMapa" href={estacionamiento.mapa} target="_blank">Ver Mapa</a>{' '}

                                <button  className="b_estacionar"
                                    onClick={() => this.estacionar(estacionamiento.idPlayaDeEstacionamiento, this.props.usuario.idUsuario)}>Estacionar</button>
                            </div>
                            <br></br>
                            <Link to={"/"} className="btn btn-success">Volver</Link>


                        </form>
                    </div>
                    <div className="card-footer text-muted">

                    </div>
                </div>
            );
        }
    }


}

export default VerEstacionamiento;



