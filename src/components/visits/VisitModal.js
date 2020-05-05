import React, { Component } from 'react';
import Modal from 'react-modal';

import Container from '../container';
import Title from '../Title';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class VisitModal extends Component {
    constructor(props){
        super(props)

        this.state = {
            open: true
        }

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({
            open: true
        })
    }

    closeModal() {
        this.setState({
            open: false
        })
    }

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.state.open}>
                    <Container>
                        <div style={{'textAlign': 'left', 'marginTop': '2em'}}>
                            <header>
                                <Title/>
                                <h1>
                                    Cuentanos de tu visita
                                    <span style={{'backgroundColor': 'yellow', 'margin': '0 0.3em'}}> 
                                    {this.props.place.title}</span>
                                </h1>
                            </header>
                            <div className="row">
                                <div className="col-xs-4 col-sm-2 col-lg-1"></div>
                                <div className="col-xs">
                                <TextField 
                                    id="filled-basic" 
                                    label="Cuentanos que te parecio este lugar"
                                    variant="filled"
                                    ref="observationField"
                                    multiline
                                    style={{'width': '100%'}}
                                    />
                                <div style={{'marginTop': '1em'}}>
                                    <Button variant="contained" color="primary">
                                        Guardar
                                    </Button>
                                    <Button 
                                        onClick={this.closeModal}
                                        style={{'marginLeft': '2em'}}>
                                        Cancelar
                                    </Button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Modal>
            </div>
        );
    }
}

export default VisitModal;