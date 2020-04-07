import React, {Component} from 'react';
import {  ThemeProvider } from '@material-ui/core/styles';
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';

  import { withRouter } from "react-router";

import MyNavBar from './components/navigation/MyNavBar';

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        // para no perder el valor de this
        this.goHome = this.goHome.bind(this);
    }

    goHome(){
        this.props.history.push('/');
    }

    render() {
        return (
            <ThemeProvider>
                <MyNavBar goHome={this.goHome}/>
                <TransitionGroup>
                    <CSSTransition classNames="left-out" timeout={300} key={this.props.location.pathname.split('/')[1]}>
                    {this.props.children}
                    </CSSTransition>
                </TransitionGroup>
            </ThemeProvider>
        )
    }
}


export default withRouter(App);

//Iconos diseñados por <a href="https://www.flaticon.es/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon"> www.flaticon.es</a>