import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JumbLoginText from './components/JumbLoginText';
import NavLoginForm from './components/NavLoginForm';
import MainMatForm from './components/MainMatForm';
import MainNav from './components/MainNav';
import { Link, Route} from 'react-router-dom';
import Perfil from './components/Perfil';

import { usuarios, solicitudes } from './todos.json';

class App extends Component {
  constructor(){
    super();
    this.state = { usuarios, solicitudes }
  }

  render() {
    /*
    const todos = this.state.todos.map((todo, i) => {
      return(
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{ todo.title.toUpperCase() } </h5>
            <p class="card-text">{ todo.description }</p>
            <a href="#" class="btn btn-primary">Ver pedido completo</a>

          </div>
        </div>
        );
    });*/
    return (
      <div className="App">

        <MainNav/>

        <div className="container">
          <Route path="/inicio" component={JumbLoginText}/>
          <Route path="/solicitudes" component={MainMatForm}/>
          <Route path="/perfil" component={Perfil}/>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>

    );
  }
}

export default App;
