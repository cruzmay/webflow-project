import React from 'react'
import ReactDOM from 'react-dom';
import { app } from './app';
import './styles/styles.scss'

ReactDOM.render(
React.createElement( app, {}, null),
document.getElementById('react-target')
);