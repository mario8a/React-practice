import React, {Component} from 'react';
import {  ThemeProvider } from '@material-ui/core/styles';



import Home from './pages/home';
import './App.css';


class App extends Component {

    constructor(props) {
        super(props);
        console.log();
    }

    render() {
        return (
            <ThemeProvider>
                <Home></Home>
            </ThemeProvider>
        )
    }
}


export default App;

//Iconos diseñados por <a href="https://www.flaticon.es/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon"> www.flaticon.es</a>