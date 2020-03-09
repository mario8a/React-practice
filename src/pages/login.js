import React from 'react';
import Title from '../components/Title';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '../components/container';

import {
    BrowserRouter as ReactRouter,
    Route,
    Link
  } from "react-router-dom";

export default class Login extends React.Component{

    render() {
        return(
            <div style={{"width": "100%" , "marginTop": "15px"}} className="row middle-xs">
            <div className="col-xs-12 col-sm-6">
                <Container>
                <div>
                    <Title></Title>
                    <TextField id="outlined-basic" className="textfield" label="Correo Electronico" type="email" variant="outlined" />
                    <TextField id="outlined-basic" className="textfield" label="Contraseña" type="password" variant="outlined" />
                    
                        <div className="login-actions">
                            <Route path="/login" exact render={() => {
                                return(
                                    <div>
                                        <Link to="/signup" style={{'marginRight': "1rem"}}>
                                        Crear nueva cuenta
                                        </Link>
                                        <Button variant="contained" color="secondary">
                                        Ingresar
                                        </Button>
                                    </div>  
                                )
                            }}></Route>
                            <Route path="/signup" exact render={() => {
                                return(
                                    <div>
                                        <Link to="/login" style={{'marginRight': "1rem"}}>
                                            Ya tengo cuenta
                                        </Link>
                                        <Button variant="contained" color="secondary">
                                        Crear cuenta
                                        </Button>
                                    </div>  
                                )
                            }}></Route>
                        </div>
                    
                </div>
                </Container>
            </div>
            <div className="col-xs-12 col-sm-6">
            
                        <div>
                            <Route path="/login" exact render={() => 
                                
                                    <div className="login-bg" style={{'backgroundImage': "url("+ process.env.PUBLIC_URL + '/img/login-bg.jpg' + ")"}}></div>
                                
                            }></Route>
                            <Route path="/signup" exact render={() => 
                                
                                    <div className="login-bg" style={{'backgroundImage': "url("+ process.env.PUBLIC_URL + '/img/welcome.jpg' + ")"}}></div>
                                
                            }></Route>
                            
                        </div>
            </div>
            </div>
        )
    }

}