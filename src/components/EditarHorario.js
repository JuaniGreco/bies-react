import React from 'react';
import { Link } from "react-router-dom";
import apiHorarios from "../servicios/ApiHorarios";


class Editar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            estacionamientohorario: [],
            errores: []
        }
    }

    cambioValor = (e) => {
        const state = this.state.estacionamientohorario;

        state[e.target.name] = e.target.value;
        this.setState({ estacionamientohorario: state });
    }

    verificarError(elemento) {
        return this.state.errores.indexOf(elemento) !== -1;
    }

    enviarDatos = (e) => {
        e.preventDefault();

        const { idHorario, idPlayaDeEstacionamiento, nombreDia, horaInicio, horaFin } = this.state.estacionamientohorario;

        var errores = [];
        if (!idPlayaDeEstacionamiento) errores.push("error_idPlayaDeEstacionamiento");
        if (!nombreDia) errores.push("error_nombreDia");
        if (!horaInicio) errores.push("error_horaInicio");
        if (!horaFin) errores.push("error_horaFin");

        var datosEnviar = { idHorario: idHorario, idPlayaDeEstacionamiento: idPlayaDeEstacionamiento, nombreDia: nombreDia, horaInicio: horaInicio, horaFin: horaFin }

        fetch(apiHorarios + "?actualizar=1", {
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
        console.log("Respuesta ID:", this.props.match.params.id);

        fetch(apiHorarios + "?consultar=" + this.props.match.params.id)
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta);
                this.setState({
                    datosCargados: true,
                    estacionamientohorario: datosRespuesta[0]
                })
            })
            .catch(console.log)
    }

    render() {

        const { datosCargados, estacionamientohorario } = this.state
        if (!datosCargados) { return (<div>Cargando...</div>); }
        else {

            return (
                <div className="card">
                    <div className="card-header">
                        Editar Horario
                    </div>
                    <div className="card-body">


                        <div className="form-group">
                            <label htmlFor="">ID</label>
                            <input type="text" readOnly className="form-control" value={estacionamientohorario.idHorario} id="idHorario" aria-describedby="helpId" placeholder="" />
                            <small id="helpId" className="form-text text-muted"></small>
                            <br></br>
                        </div>

                        <form onSubmit={this.enviarDatos} >
                            <div className="form-group">
                                <label htmlFor="">ID Playa de Estacionamiento:</label>
                                <input type="text" name="idPlayaDeEstacionamiento" id="idPlayaDeEstacionamiento" onChange={this.cambioValor} value={estacionamientohorario.idPlayaDeEstacionamiento} className="form-control" placeholder="" aria-describedby="helpId" />
                                <small id="helpId" className="text-muted">Ingrese el ID correspondiente del Estacionamiento</small>
                                <br></br>
                            </div>

                            <div className="form-group">
                                <br></br>
                                <label htmlFor="">Dia de la Semana:</label>
                                <input type="text" name="nombreDia" id="nombreDia" onChange={this.cambioValor} minLength={1} maxLength={7} value={estacionamientohorario.nombreDia} className="form-control" placeholder="" aria-describedby="helpId" />
                            </div>

                            <div className="form-group">
                                <br></br>
                                <label htmlFor="">Hora Inicio:</label>
                                <input type="time" name="horaInicio" id="horaInicio" onChange={this.cambioValor} value={estacionamientohorario.horaInicio} className="form-control" placeholder="" aria-describedby="helpId" />
                                <small id="helpId" className="text-muted"></small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Hora Fin:</label>
                                <input type="time" name="horaFin" id="horaFin" onChange={this.cambioValor} value={estacionamientohorario.horaFin} className="form-control" placeholder="" aria-describedby="helpId" />
                                <small id="helpId" className="text-muted"></small>
                                <br></br>
                            </div>


                            <div className="btn-group" role="group" aria-label="">
                                <button type="submit" className="btn btn-success">Actualizar</button>
                                <Link to={"/"} className="btn btn-cancel">Cancelar</Link>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer text-muted">

                    </div>
                </div>);
        }
    }
}

export default Editar;