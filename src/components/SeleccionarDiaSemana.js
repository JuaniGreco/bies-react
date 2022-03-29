import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'LUNES', label: 'Lunes' },
    { value: 'MARTES', label: 'Martes' },
    { value: 'MIERCOLES', label: 'Miercoles' },
    { value: 'JUEVES', label: 'Jueves' },
    { value: 'VIERNES', label: 'Viernes' },
    { value: 'SABADO', label: 'Sabado' },
    { value: 'DOMINGO', label: 'Domingo' }
]

const SeleccionarDiaSemana = () => {
  return (
    <Select options={options} placeholder = "Seleccione un dia"/>
  )
}

export default SeleccionarDiaSemana;