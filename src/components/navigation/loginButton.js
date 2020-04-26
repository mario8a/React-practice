import React from 'react';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';


export default class LoginButton extends React.Component{
    render() {
        return(
            <Link to="/login">
                <Button size="medium" style={{'color': 'white'}}>
                    Iniciar sesion
                </Button>
            </Link>
            
        )
    }
}