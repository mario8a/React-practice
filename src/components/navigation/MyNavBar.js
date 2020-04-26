import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
// import MenuItem from '@material-ui/core/MenuItem';

import LoginButton from './loginButton';
import LogoutButton from './logoutButton';

import {Link} from 'react-router-dom'

//Colors
import indigo400 from '@material-ui/core/colors/indigo';

//const - variables
const indigo = indigo400[400];

export default class MyNabBar extends React.Component {

    getName() {
        if(this.props.user.email)
            return this.props.user.email.split("@")[0];
        return  ""
    }

    title() {
        return (
            <span style={{'cursor': 'pointer', 'textTransform': 'capitalize'}}>
             { this.props.user.jwt ? 'Bienvenido ' + this.getName() : 'Places'}
            </span>
            
            )
    }

    butonOpcion() {
        return this.props.user.jwt ? <LogoutButton logout={this.props.logout} /> : <LoginButton />
    }
    render() {

        return(
            
            <AppBar  
                position="static" 
                style={{'backgroundColor': indigo}}>
                <Toolbar>
                    <Link to={'/'}>
                        <Typography variant="h5" style={{'color': 'white' , 'cursor': 'pointer'}}>
                            {this.title()}
                        </Typography>
                    </Link>
                    <div style={{'color': 'white'}}>
                        {this.butonOpcion()}
                    </div>
                </Toolbar>
            </AppBar>
        )
    
    }
}