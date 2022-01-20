import React from 'react';
import { Link } from "react-router-dom";
import apiCrearUsuario from '../servicios/ApiCrearUsuario';;

class CrearUsuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            dni: "",
            clave: "",

            email: "",
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

        const { nombre, dni, clave, email } = this.state;
        console.log(nombre, dni, clave, email);

        var errores = [];
        if (!nombre) errores.push("error_nombre");
        if (!dni) errores.push("error_dni");
        if (!clave) errores.push("error_clave");
        if (!email) errores.push("error_email");

        this.setState({ errores: errores });
        if (errores.length > 0) {
            return false;
        }
        var datosEnviar = { nombre: nombre, dni: dni, clave: clave, email: email };
        console.log(datosEnviar);

        fetch(apiCrearUsuario + "?insertar=1", {
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

        const { nombre, dni, clave, email } = this.state;

        return (
            <div className="card">
                <div className="card-header">
                
                    Registrarse
                </div>
                <div className="card-body">
                    <form onSubmit={this.enviarDatos} >
                        <div className="form-group">
                            <label htmlFor="">Nombre y Apellido:</label>
                            <input type="text" name="nombre" onChange={this.cambioValor} minLength={6} maxLength={50} value={nombre} id="nombre" className={((this.verificarError("error_nombre")) ? "is-invalid" : "") + " form-control"} placeholder="" aria-describedby="helpId" />
                            <small id="helpId" className="invalid-feedback">Ingrese nombre y apellido</small>
                            <br></br>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Dni:</label>
                            <input type="text" name="dni" id="dni" onChange={this.cambioValor} minLength={6} maxLength={9} value={dni} className={((this.verificarError("error_dni")) ? "is-invalid" : "") + " form-control"} placeholder="" aria-describedby="helpId" />
                            <small id="helpId" className="invalid-feedback">Ingrese dni</small>
                            <br></br>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Clave:</label>
                            <input type="password" name="clave" id="clave" onChange={this.cambioValor} maxLength={20} value={clave} className={((this.verificarError("error_clave")) ? "is-invalid" : "") + " form-control"} placeholder="" aria-describedby="helpId" />
                            <small id="helpId" className="invalid-feedback">Ingrese clave</small>
                            <br></br>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Email:</label>
                            <input type="text" name="email" id="email" onChange={this.cambioValor} maxLength={60} value={email} className={((this.verificarError("error_email")) ? "is-invalid" : "") + " form-control"} placeholder="" aria-describedby="helpId" />
                            <small id="helpId" className="invalid-feedback">Ingrese email</small>
                            <br></br>
                        </div>

                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">Registrarme</button>
                            <Link to={"/"} className="btn btn-cancel">Cancelar</Link>
                        </div>
                    </form>

                </div>
                <div className="card-footer text-muted">

                </div>
            </div>);
    }
}

export default CrearUsuario;