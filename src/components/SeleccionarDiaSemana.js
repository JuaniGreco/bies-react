import React from 'react'

export default class SeleccionarDiaSemana extends React.Component {
    render(){
        return(
            <div> 
                <select required className="form-control" defaultValue={this.props.nombreDia} onChange={this.props.onChangeDia} > 
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