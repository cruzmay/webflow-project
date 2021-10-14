import React from 'react'
import ReactDOM from 'react-dom';
import { app } from './app';

ReactDOM.render(
React.createElement( app, {}, null),
document.getElementById('react-target')
);