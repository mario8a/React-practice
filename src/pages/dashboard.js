import React from 'react';
import {connect} from 'react-redux';

import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

// import data from '../request/places';
// import {getPlaces} from '../request/places';

import Container from '../components/container';
import PlaceHorizontal from '../components/places/placeHorizontal';

import * as actions from '../actions/placesActions';

import {
    Link
  } from "react-router-dom";

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            places: []
        }

        this.loadPlaces()
    }

    loadPlaces() {
      // getPlaces().then(resp => {
      //   console.log(resp);
      //   this.setState({
      //     places: resp.docs
      //   })
      // })

      this.props.dispatch(actions.loadAll())

    }

    places() {
        return this.props.places.map((place, index)  => {
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

function mapStateToProps(state,ownProps){
  return{
    places: state.places
  }
}

export default connect(mapStateToProps)(Dashboard);
