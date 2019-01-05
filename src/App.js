import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JumbLoginText from './components/JumbLoginText';
import NavLoginForm from './components/NavLoginForm';
import MainMatForm from './components/MainMatForm';
import Prueba from './components/Prueba';

import { todos } from './todos.json';

class App extends Component {
  constructor(){
    super();
    this.state = { todos }
  }

  render() {
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
    });
    return (
      <div className="App">

      {/*  vista antes de login
        <NavLoginForm/>
        <JumbLoginText/>
        */}

        <Prueba/>

        <MainMatForm/>

        <div className="container">
          <h1>{todos.length}</h1>
          <div className="row">
            { todos }
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>

    );
  }
}

export default App;
