import React from 'react';

import {
    BrowserRouter as ReactRouter,
    Route,
    Switch
  } from "react-router-dom";

import Home from './pages/home';
import Login from './pages/login';
import Dashboard from './pages/dashboard'
import App from './App';
import Place from './pages/Place';

const userSignedIn = true;

export default class Router extends React.Component {
  
  // Si el usuario esta auth prodra ingresa
  signedInRoutes() {
    if(userSignedIn) {
      return (
        <Route path="/new" render={() => <h1>Bienvenido</h1>}></Route>
      )
    }
  }

  home() {
    if(userSignedIn) return Dashboard;

    return Home;
  }

    render() {
        return(
            <ReactRouter>
              <App>
                <Switch>
                  <Route exact path="/" component={this.home()}></Route>
                  <Route path="/lugares/:slug" component={Place}></Route>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/signup" component={Login}></Route>
                  {this.signedInRoutes()}
                </Switch>
              </App>
            </ReactRouter>
        )
    }
    // Switch encaja unicamente con el primero que condida con la ruta (component)

}