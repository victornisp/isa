import React from 'react';
import { solicitudes } from '../todos.json';

class MainMatForm extends React.Component {
  constructor(){
    super();
    this.state = { solicitudes }
  }

  render(){
    const solicitudesTr = this.state.solicitudes.map((solicitud, i) => {
      return(
         <tr>
           <th scope="row">{solicitud.id}</th>
           <td>{solicitud.cant}</td>
           <td>{solicitud.unid}</td>
           <td>{solicitud.descripcion_material}</td>
           <td>{solicitud.observacion}</td>
           <td>{solicitud.envio}</td>
           <td>{solicitud.saldo}</td>
         </tr>
      );
    });

    return(

      <div className="container">
        <table class="table table-bordered table-dark">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Cant</th>
                <th scope="col">Unid</th>
                <th scope="col">Descripcion material</th>
                <th scope="col">Observacion</th>
                <th scope="col">Envio</th>
                <th scope="col">Saldo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              {solicitudesTr}
            </tbody>
        </table>
      </div>

    );
  }
}

export default MainMatForm;
