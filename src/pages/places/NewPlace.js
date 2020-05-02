import React, { Component } from 'react';
import {connect} from 'react-redux';

import Title from '../../components/Title';
import Container from '../../components/container';

import * as request from '../../request/places';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';

import './styles.css'

class NewPlace extends Component {
    constructor() {
        super()
    }
    createPlace() {
        const data = {
            title: this.refs.titleField.getValue(),
            address: this.refs.addressField.getValue(),
            description: this.refs.descField.getValue()
        }
    }

    render() {
        return (
            <div>
                <br/>
                <Container>
                    <Card className="card">
                        <header  style={{'borderBottom': 'solid 2px #eee'}}>
                            <Title/>
                        </header>

                        <div className="div-inputs">
                        <TextField className="input"
                                    id="outlined-basic" 
                                    label="Nombre del negocio" 
                                    variant="filled" 
                                    ref="titleField"/>
                        <TextField className="input"
                                    id="outlined-basic" 
                                    label="Direccion del negocio" 
                                    variant="filled" 
                                    ref="addressField"/>

                        <TextField className="input"
                                    placeholder="Descripcion del negocio"
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={12}
                                    variant="outlined"
                                    ref="descField"
                                  />

                        <div style={{'textAlign': 'right', 'marginTop': '1em'}}>
                            <Button variant="contained"  onClick={this.createPlace} color="secondary">Guardar</Button>
                        </div>

                        </div>
                    </Card>
                </Container>
            </div>
        );
    }
}

export default connect(function(state, ownPlace) {
    return {
        // places: state.places
        user: state.user
    }
}) (NewPlace);