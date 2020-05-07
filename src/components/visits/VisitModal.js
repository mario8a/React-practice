import React, { Component } from 'react';
import Modal from 'react-modal';

import Container from '../container';
import Title from '../Title';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import EmojiPicker from './emoji_picker/EmojiPicker';

class VisitModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            observation: '',
            open: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(e) {
        const { value } = e.target;
        this.setState({ observation: value });
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

    submit() {
        // const observation = {
        //     observation: this.state.observation,
        // }

        // console.log(this.state.observation);
        const observation = this.state.observation;
        console.log(observation);

        // console.log(observation);
        this.props.onSubmit(observation)
        this.closeModal();
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
                                <div className="col-xs-4 col-sm-2 col-lg-1">
                                    <EmojiPicker/>
                                </div>
                                <div className="col-xs">
                                <TextField 
                                    id="filled-basic" 
                                    label="Cuentanos que te parecio este lugar"
                                    variant="filled"
                                    multiline
                                    onChange={this.handleChange}
                                    name="observation"
                                    
                                    style={{'width': '100%'}}
                                    />
                                <div style={{'marginTop': '1em'}}>
                                    <Button variant="contained" onClick={this.submit} color="primary">
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