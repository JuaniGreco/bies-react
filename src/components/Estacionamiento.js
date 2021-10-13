import React from 'react';

class Estacionamiento extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <table class="table">
            <thead>
                <tr>
                    <th>N Estacionamiento</th>
                    <th>nombre</th>
                    <th>direccion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">1</td>
                    <td>Alvear</td>
                    <td>Alvear 2823</td>
                </tr>
                
            </tbody>
        </table> );
    }
}
 
export default Estacionamiento;