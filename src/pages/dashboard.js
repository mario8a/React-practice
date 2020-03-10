import React from 'react';

import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import data from '../request/places';

import Container from '../components/container';
import PlaceHorizontal from '../components/places/placeHorizontal';

import {
    Link
  } from "react-router-dom";

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            places: data.places
        }
    }

    places() {
        return this.state.places.map((place, index)  => {
           return <PlaceHorizontal place={place} />
        })
    }

    render() {
        return(
            <div>
               <Link to='/new'>
                 <Fab className="FAV" color="secondary" aria-label="add">
                  <AddIcon />
                 </Fab>
               </Link>
                <Container>
                    <div className="row">
                      <div className="col-xs-12 col-md-2" style={{'textAlign': 'left'}}>
                        <Button color="primary">Explorar</Button>
                        <Button color="secondary">Favoritos</Button>
                        <Button color="primary">Visitas previas</Button>
                      </div>
                      <div className="col-xs-12 col-md-10">
                        {this.places()}
                      </div>
                    </div>
                </Container>
            </div>
        )
    }
}