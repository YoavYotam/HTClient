import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from '../src/components/index';
//import * as serviceWorker from './serviceWorker';
import 'leaflet/dist/leaflet.css'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
