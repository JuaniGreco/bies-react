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
            playadeestacionamiento: [],
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
        const { idPlayaDeEstacionamiento, nombrePlayaDeEstacionamiento, ubicacion, observaciones, mapa, lugaresLibres } = this.state.estacionamiento;


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
                        : data.data === "ya_estacionado" ? (alert("Ya estabas estacionado con anterioridad, desestacione y vuelva a intentar"))
                            : (alert("El estacionamiento se encuentra cerrado"));
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
        const { datosCargados, estacionamiento, playadeestacionamiento } = this.state
        if (!datosCargados) { return (<div>Cargando...</div>); }
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
                                <tr>
                                    <td>{estacionamiento.nombrePlayaDeEstacionamiento}</td>
                                    <td>{estacionamiento.ubicacion}</td>
                                    <td>{estacionamiento.lugaresLibres}</td>
                                    <td>{estacionamiento.observaciones}</td>
                                    <td>
                                        <div>
                                            <a className="b_linkMapa" href={estacionamiento.mapa} target="_blank" rel="noreferrer">📍 Ubicación</a>{' '}

                                            <button className="b_estacionar"
                                                onClick={() => this.estacionar(estacionamiento.idPlayaDeEstacionamiento, this.props.usuario.idUsuario)}>✔️Estacionar</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <Link to={"/"} className="btn btn-success">Volver</Link>
                    </div>                    
                </div>


            );
        }
    }


}

export default VerEstacionamiento;