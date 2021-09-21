import React from 'react';


class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Cargar nombre</th>
                    <th>Cargar ubicacion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">1</td>
                    <td>ingrese nombre</td>
                    <td>ingrese ubicacion</td>
                </tr>
                
            </tbody>
        </table> );
    }
}
 
export default Listar;