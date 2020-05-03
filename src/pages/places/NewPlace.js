import React, { Component } from 'react';
import {connect} from 'react-redux';

import Title from '../../components/Title';
import Container from '../../components/container';
import Uploader from '../../components/uploader/Uploader';

import * as request from '../../request/places';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import {push} from 'react-router-redux';

import './styles.css'

class NewPlace extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            address: '',
            description: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.createPlace = this.createPlace.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name] : event.target.value});
      }

    createPlace() {
        const data = {
            title: this.state.title,
            address: this.state.address,
            description: this.state.description
        }
        
        if(data['title'] === "" || data["address"] === "" || data['description'] === ""){
            alert('Toda la información debe ser llenada'); //Handle error
            return "";
          }

          request.createPlace(data, this.props.user.jwt).then(data => {
            //   console.log(data)
            // this.props.dispatch(push("/")) regresa a la lista de los lugares
            this.props.dispatch(push("/lugares/"+data.slug))
          }).catch(console.log)
      
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
                                    ref="titleField"
                                    name='title'
                                    onChange={this.handleChange}/>
                        <TextField className="input"
                                    id="outlined-basic" 
                                    label="Direccion del negocio" 
                                    variant="filled" 
                                    ref="addressField"
                                    name='address'
                                    onChange={this.handleChange}/>
                        
                        <Uploader label="Subir avatar"/>

                        <TextField className="input"
                                    placeholder="Descripcion del negocio"
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={12}
                                    variant="outlined"
                                    ref="descField"
                                    name='description'
                                    onChange={this.handleChange}
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