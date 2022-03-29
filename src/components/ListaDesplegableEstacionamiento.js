import React from "react";
import '../css/login.css';

export const ListaDesplegableEstacionamiento = (props) => (
    <div className="form-group" >
        <select required
            className="form-control"
            name="{props.nombrePlayaDeEstacionamiento}"
            onChange={props.onChange} defaultValue="">
            <option name="default-option" value="" disabled selected hidden>Selecciona un estacionamiento</option>
            {props.options.map((item, idPlayaDeEstacionamiento) => (
                
                <option key={idPlayaDeEstacionamiento} value={item.idPlayaDeEstacionamiento} >
                    {item.nombrePlayaDeEstacionamiento}
                </option>
            ))}
        </select>
    </div>
)