import React, { Component } from 'react';
import {connect} from 'react-redux';

import VisitModal from './VisitModal';

import Button from '@material-ui/core/Button';

import * as actions from '../../actions/visitsActions';

class VisitForm extends Component {
    constructor(props) {
        super(props)

        this.openVisitsModal = this.openVisitsModal.bind(this);
        this.add = this.add.bind(this);
    }

    openVisitsModal() {
        this.refs.modalRef.openModal();
    }

    add(observation,reaction = "love") {
        this.props.dispatch(actions.addVisit(this.props.place,observation, reaction))
    }

    render() {
        return (
            <div>
            <VisitModal place={this.props.place} onSubmit={this.add} ref="modalRef"/>
                <Button 
                    onClick={this.openVisitsModal}
                    color="secondary">
                        Valorar tu visita al negocio
                 </Button>
            </div>
        )
    }
}


function mapStateToProps(state, ownProps) {
    return {
    };
  }
  
  export default connect(mapStateToProps)(VisitForm);
  