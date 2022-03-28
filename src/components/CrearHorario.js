import React from 'react';
import { Link } from "react-router-dom";
import apiHorarios from "../servicios/ApiHorarios";

class Crear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idPlayaDeEstacionamiento: "",
            nombreDia: "",
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

        const { idPlayaDeEstacionamiento, nombreDia, horaInicio, horaFin } = this.state;

        var errores = [];
        if (!idPlayaDeEstacionamiento) errores.push("error_idPlayaDeEstacionamiento");
        if (!nombreDia) errores.push("error_nombreDia");
        if (!horaInicio) errores.push("error_horaInicio");
        if (!horaFin) errores.push("error_horaFin");

        this.setState({ errores: errores });
        if (errores.length > 0) {
            return false;
        }
        var datosEnviar = { idPlayaDeEstacionamiento: idPlayaDeEstacionamiento, nombreDia: nombreDia, horaInicio: horaInicio, horaFin: horaFin }

        fetch(apiHorarios + "?insertar=1", {
            method: "POST",
            body: JSON.stringify(datosEnviar)

        })
            .then(respuesta => respuesta.json())
            .then((data) => {
                console.log(data.data);
                this.props.history.push("/");
                data.data === "ok" ? alert("Horario Agregado") : alert(data.data);
            })
            .catch(console.log)
    }



    render() {

        const { idPlayaDeEstacionamiento, nombreDia, horaInicio, horaFin } = this.state;

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
                        <input type="text" name="nombreDia" id="nombreDia" onChange={this.cambioValor} value={nombreDia} className={((this.verificarError("error_nombreDia")) ? "is-invalid" : "") + " form-control"} placeholder="" aria-describedby="helpId" />
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