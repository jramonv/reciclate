import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Menu from './Components/Menu';

 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import 'bootstrap'; // Archivo Javascript de Bootstrap 4 
import 'jquery';
import 'popper.js';
 
ReactDOM.render(<Menu />, document.getElementById('root'));
 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

