
import { Link } from "react-router-dom";
import React from 'react';
import Api from "../servicios/Api";
import '../css/login.css';
import ApiEstacionar from '../servicios/ApiEstacionar';


class VerEstacionamiento extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            estacionamiento: [],
            estacionado: ""
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
        const { idPlayaDeEstacionamiento, nombrePlayaDeEstacionamiento, ubicacion, observaciones, mapa, lugaresLibres} = this.state.estacionamiento;


        var datosEnviar = { idPlayaDeEstacionamiento: idPlayaDeEstacionamiento, nombrePlayaDeEstacionamiento: nombrePlayaDeEstacionamiento, ubicacion: ubicacion, observaciones: observaciones, mapa: mapa, lugaresLibres: lugaresLibres }

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
            .then(response => response.json()
            .then(data => {
                
                console.log(data.data);
                this.cargarDatos();
                data.data === "estacionado" ? (alert("Te has estacionado")) 
                : data.data === "ya_estacionado" ? (alert ("Ya estabas estacionado con anterioridad, desestacione y vuelva a intentar"))
                : (alert ("El estacionamiento se encuentra cerrado"));
                console.log(data.data);
            }))
            .catch(console.log)
            //alert('Usted se ha estacionado.');
    }




    cargarDatos() {
        fetch(Api)
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta);
                this.setState({ datosCargados: true, playadeestacionamiento: datosRespuesta, estacionado: true });
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
                                <label htmlFor="">Lugares Libres:</label>
                                <input type="text" readOnly name="lugaresLibres" id="lugaresLibres" onChange={this.cambioValor} value={estacionamiento.lugaresLibres} className="form-control" placeholder="" aria-describedby="helpId" />

                            </div>

                            <div className="form-group">
                                <label htmlFor="">Observaciones:</label>
                                <input type="text" readOnly name="observaciones" id="observaciones" onChange={this.cambioValor} value={estacionamiento.observaciones} className="form-control" placeholder="" aria-describedby="helpId" />

                            </div>

                            <br></br>
                            <div>
                                <a className="b_linkMapa" href={estacionamiento.mapa} target="_blank" rel="noreferrer">Ver Mapa</a>{' '}

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



