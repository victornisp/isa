//Dependencias
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';

//Rutas
import AppRoutes from './routes';

import './index.css';
import * as serviceWorker from './serviceWorker';

render(<Router><AppRoutes/></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
