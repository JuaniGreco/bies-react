import React from 'react';
import { Link } from "react-router-dom";
import apiHorarios from "../servicios/ApiHorarios";

class Crear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idPlayaDeEstacionamiento: "",
            diaSemana: "",
            horaInicio: "",
            horaFin: "",
            errores: []
        }
    }

    cambioValor = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({ state, errores: [] });
    }


    verificarError(elemento) {

        return this.state.errores.indexOf(elemento) !== -1;
    }

    enviarDatos = (e) => {
        e.preventDefault();
        console.log("Formulario enviado");

        const { idPlayaDeEstacionamiento, diaSemana, horaInicio, horaFin } = this.state;

        var errores = [];
        if (!idPlayaDeEstacionamiento) errores.push("error_idPlayaDeEstacionamiento");
        if (!diaSemana) errores.push("error_diaSemana");
        if (!horaInicio) errores.push("error_horaInicio");
        if (!horaFin) errores.push("error_horaFin");

        this.setState({ errores: errores });
        if (errores.length > 0) {
            return false;
        }
        var datosEnviar = { idPlayaDeEstacionamiento: idPlayaDeEstacionamiento, diaSemana: diaSemana, horaInicio: horaInicio, horaFin: horaFin }

        fetch(apiHorarios + "?insertar=1", {
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



    render() {

        const { idPlayaDeEstacionamiento, diaSemana, horaInicio, horaFin } = this.state;

        return (<div className="card">
            <div className="card-header">
                Crear Horario
            </div>
            <div className="card-body">
                <form onSubmit={this.enviarDatos} >
                    <div className="form-group">
                        <label htmlFor="">ID Playa Estacionamiento:</label>
                        <input type="text" name="idPlayaDeEstacionamiento" onChange={this.cambioValor} minLength={1} maxLength={50} value={idPlayaDeEstacionamiento} id="idPlayaDeEstacionamiento" className={((this.verificarError("error_idPlayaDeEstacionamiento")) ? "is-invalid" : "") + " form-control"} placeholder="" aria-describedby="helpId" />
                        <small id="helpId" className="text-muted">Ingrese el ID correspondiente del Estacionamiento</small>
                        <br></br>
                    </div>

                    <div className="form-group">
                        <br></br>
                        <label htmlFor="">Dia de la Semana:</label>
                        <input type="number" name="diaSemana" id="diaSemana" onChange={this.cambioValor} pattern="[0-6]" size="1" min="0" max="6" value={diaSemana} className={((this.verificarError("error_diaSemana")) ? "is-invalid" : "") + " form-control"} placeholder="" aria-describedby="helpId" />
                        <small id="helpId" className="text-muted">0:Lunes  1:Martes  2:Miercoles  3:Jueves  4:Viernes  5:Sabado  6:Domingo</small>
                        <br></br>
                    </div>

                    <div className="form-group">
                        <br></br>
                        <label htmlFor="">Hora Inicio:</label>
                        <input type="time" name="horaInicio" id="horaInicio" onChange={this.cambioValor} value={horaInicio} className={((this.verificarError("error_horaInicio")) ? "is-invalid" : "") + " form-control"} placeholder="" aria-describedby="helpId" />
                        <small id="helpId" className="text-muted"></small>
                        <br></br>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Hora Fin:</label>
                        <input type="time" name="horaFin" id="horaFin" onChange={this.cambioValor} value={horaFin} className={((this.verificarError("error_horaFin")) ? "is-invalid" : "") + " form-control"} placeholder="" aria-describedby="helpId" />
                        <small id="helpId" className="text-muted"></small>
                        <br></br>
                    </div>


                    <div className="btn-group" role="group" aria-label="">
                        <button type="submit" className="btn btn-success">Agregar</button>
                        <Link to={"/"} className="btn btn-cancel">Cancelar</Link>

                    </div>
                </form>

            </div>
            <div className="card-footer text-muted">

            </div>
        </div>);
    }
}

export default Crear;