import React,{useState} from 'react'

export default function SeleccionarDiaSemana (props) {

    const [dia, setDia] = React.useState(props.nombreDia);
    const estadoDia=(event)=>{
        setDia(event.target.value)
        console.log(event.target.value)       
        
    }    

    const someMethod = () => {
        props.handler(dia)
    }

    console.log("DIA NUEVO",dia)
    
    
    return( 
        <div> 
                <select required className="form-control" defaultValue={dia} onClick={someMethod} onChange={estadoDia} > 
                <option name="default-option" value="" hidden>Selecciona un día</option>
                    <option value="LUNES">Lunes</option>
                    <option value="MARTES">Martes</option>
                    <option value="MIERCOLES">Miercoles</option>
                    <option value="JUEVES">Jueves</option>
                    <option value="VIERNES">Viernes</option>
                    <option value="SABADO">Sabado</option>
                    <option value="DOMINGO">Domingo</option>
                </select>
            </div>
        )
    }

