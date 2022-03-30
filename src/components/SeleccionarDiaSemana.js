import React from 'react'

const SeleccionarDiaSemana = () => {
  return (
    <div>
    <select required className="form-control" defaultValue="" onInvalid="">
      <option name="default-option" value="" disabled selected hidden>Selecciona un dia</option>
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

export default SeleccionarDiaSemana