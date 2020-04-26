import React from 'react';
import Title from '../components/Title';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '../components/container';

import {login, signUp} from '../request/auth';

import {connect} from 'react-redux';

import * as actions from '../actions/userActions';

import { push } from 'react-router-redux';

import {
    // BrowserRouter as ReactRouter,
    Route,
    Link
  } from "react-router-dom";

const NameField = (props) => (
  <TextField 
    id="outlined-basic nombre-txt"
    className="textfield" 
    label="Nombre" 
    type="text" 
    variant="outlined"
    ref={props.nameRef}/> 
);

const LoginActions = (props) => (
  <div>
      <Link to="/signup" style={{'marginRight': "1rem"}}>
        Crear nueva cuenta
      </Link>
      <Button onClick={props.requestAuth} variant="contained" color="secondary">
        Ingresar
      </Button>
  </div> 
)

const  SignUpActions = (props) => (
  <div>
  <Link to="/login" style={{'marginRight': "1rem"}}>
      Ya tengo cuenta
  </Link>
  <Button onClick={props.createAccount} variant="contained" color="secondary">
  Crear cuenta
  </Button>
</div>  
)

class Login extends React.Component{

    constructor(props){
        super(props);

        // console.log(props.user);

        // this.requestAuth = this.requestAuth.bind(this);
        this.state = {
            email: '',
            password: '',
            name: 'nombre'
          };

        this.handleChange = this.handleChange.bind(this);
        this.requestAuth = this.requestAuth.bind(this);
        this.createAccount = this.createAccount.bind(this);
        this.auth = this.auth.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name] : event.target.value});
      }

    // requestAuth() {
    //     const credentials = {
    //         email: this.refs.emailField.getValue(),
    //         password: this.refs.passwordField.getValue(),
    //     }

    //     login(credentials).then(console.log).catch(console.log);


    // }

    requestAuth(){
        const credentials = {
          email: this.state.email,
          password: this.state.password,
        }
      
        login(credentials).then(this.auth).catch(console.log);
      }

    auth(data){
      this.props.dispatch(actions.login(data.jwt));
      this.props.dispatch(actions.loadUser(data.user));
      this.props.dispatch(push('/'))
    }

    createAccount(){
      // console.log(this.nameElement)
      const credentials = {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      }

      console.log(credentials)

      signUp(credentials).then(this.auth).catch(console.log);
    }

    render() {
        return(
            <div style={{"width": "100%" , "marginTop": "15px"}} className="row middle-xs">
            <div className="col-xs-12 col-sm-6">
                <Container>
                <div>
                    <Title></Title>
                    <TextField id="outlined-basic" className="textfield" label="Correo Electronico" type="email" variant="outlined" ref="emailField" name="email" onChange={this.handleChange}/>
                    <TextField id="outlined-basic" className="textfield" label="Contraseña" type="password" variant="outlined" ref="passwordField" name="password" onChange={this.handleChange}/>
                    
                    <Route path="/signup" 
                           exact 
                           render={() => (<NameField
                           onChange={this.handleChange}
                           nameRef = {(el) => this.nameElement = el}
                           />)}>
                    </Route>

                        <div className="login-actions">
                            <Route path="/login" 
                                    exact 
                                    render={() => (<LoginActions 
                                    requestAuth={this.requestAuth}/>)}>
                            </Route>

                            <Route path="/signup" 
                                    exact 
                                    render={() => (<SignUpActions 
                                    createAccount={this.createAccount}/>)}>
                            </Route>
                        </div>
                    
                </div>
                </Container>
            </div>
            <div className="col-xs-12 col-sm-6">
            
                        <div>
                            <Route path="/login" exact render={() => 
                                
                                    // eslint-disable-next-line no-useless-concat
                                    <div className="login-bg" style={{'backgroundImage': "url("+ process.env.PUBLIC_URL + '/img/login-bg.jpg' + ")"}}></div>
                                
                            }></Route>
                            <Route path="/signup" exact render={() => 
                                
                                    // eslint-disable-next-line no-useless-concat
                                    <div className="login-bg" style={{'backgroundImage': "url("+ process.env.PUBLIC_URL + '/img/welcome.jpg' + ")"}}></div>
                                
                            }></Route>
                            
                        </div>
            </div>
            </div>
        )
    }

}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Login);