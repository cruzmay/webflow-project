import React from 'react'
import ReactDOM from 'react-dom';
import { app } from './app';
import './styles/styles.scss'
import './firebase/config'

ReactDOM.render(
React.createElement( app, {}, null),
document.getElementById('react-target')
);