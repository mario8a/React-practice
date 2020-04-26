import React from 'react';

import Button from '@material-ui/core/Button';


export default class LogoutButton extends React.Component{
    render() {
        return(

            <div>
                <Button size="medium" style={{'color': 'white'}} onClick={this.props.logout}>
                    Cerrar sesion
                </Button>
            </div>
        )
    }
}