import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();

ReactDOM.render( 
    <Provider store= {store}> < Router / >  </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();

