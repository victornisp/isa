import React from 'react';
import {Link} from 'react-router-dom';

class Prueba extends React.Component {
  render() {
    return(
      <ul class="nav nav-pills nav-fill">
        <li class="nav-item nav-link bg-light"><Link to="/inicio" className="nav-link">Inicio</Link></li>
        <li class="nav-item nav-link bg-light"><Link to="/solicitudes" className="nav-link">Listado de solicitudes</Link></li>
        <li class="nav-item nav-link bg-light"><Link to="/perfil" className="nav-link">Perfil</Link></li>
      </ul>
    )
  }
}

export default Prueba;
