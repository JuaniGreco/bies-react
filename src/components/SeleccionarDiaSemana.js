import React from 'react'

export default class SeleccionarDiaSemana extends React.Component {
    constructor() {
        super()
    }
    render(){
        return(
            <div> 
                <select required className="form-control" onChange={this.props.onChangeDia} defaultValue= "">
                    <option value="" disabled hidden>Seleccione un dia</option>
                    <option value="Lunes">Lunes</option>
                    <option value="Martes">Martes</option>
                    <option value="Miercoles">Miercoles</option>
                    <option value="Jueves">Jueves</option>
                    <option value="Viernes">Viernes</option>
                    <option value="Sabado">Sabado</option>
                    <option value="Domingo">Domingo</option>
                </select>
            </div>
        )
    }
}
// const SeleccionarDiaSemana = (onChangeDia) => {
//   return (
//     <div>
//     <select required className="form-control" defaultValue="">
//       <option name="default-option" value="" disabled selected hidden>Selecciona un dia</option>
//       <option value="LUNES">Lunes</option>
//       <option value="MARTES">Martes</option>
//       <option value="MIERCOLES">Miercoles</option>
//       <option value="JUEVES">Jueves</option>
//       <option value="VIERNES">Viernes</option>
//       <option value="SABADO">Sabado</option>
//       <option value="DOMINGO">Domingo</option>
//     </select>
//     </div>
//   )
// }

// export default SeleccionarDiaSemana