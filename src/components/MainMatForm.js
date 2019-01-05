import React from 'react';

class MainMatForm extends React.Component {

  render(){
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
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
        </table>
      </div>

    );
  }
}

export default MainMatForm;
