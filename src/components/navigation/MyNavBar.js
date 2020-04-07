import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import {Link} from 'react-router-dom'

//Colors
import indigo400 from '@material-ui/core/colors/indigo';

//const - variables
const indigo = indigo400[400];

export default class MyNabBar extends React.Component {

    render() {

        return(
            
            <AppBar  
                position="static" 
                style={{'backgroundColor': indigo}}>
                <Toolbar>
                    <Link to={'/'}>
                        <Typography variant="h5" style={{'color': 'white'}}>
                            Places
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        )
    
    }
}