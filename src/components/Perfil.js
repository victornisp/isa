import React from 'react';
import { usuarios } from '../todos';

class Perfil extends React.Component {
  constructor(){
    super();
    this.state = { usuarios }
  }
  render(){

    const usuarios = this.state.usuarios.map((usuario, i) => {
      return(
        <div>
          <h1>RUT {usuario.rut}</h1>
          <h3>CORREO {usuario.correo}</h3>
          <h3>TELEFONO {usuario.telefono}</h3>
        </div>);
      });
    return(
      <div className="container">
        {usuarios[1]}
        <i class="massive user circle icon"></i>

      </div>
    )
  }
}
export default Perfil;
