import React from 'react';
import {Link} from "react-router-dom";

import Button from '@material-ui/core/Button';
// Colors
import indigo400 from '@material-ui/core/colors/indigo';

import {connect} from 'react-redux';

import data from '../request/places';
import {getPlaces} from '../request/places';

import Title from '../components/Title';
import Benefit from '../components/benefits';
import PlaceCard from '../components/places/placeCard';
import Container from '../components/container';

import { TransitionGroup } from 'react-transition-group';

// variables colores
const indigo = indigo400[400];


class Home extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            places: data.places
        }

        // console.log(this.props.places);

        // setTimeout(() => this.setState({places: data.places}), 2000)

        //Evita que el valor de this cambie reasignando la funcion
        this.hidePlace = this.hidePlace.bind(this)
    }

    loadPlaces() {
      getPlaces().then(jsonR => {
        const places = jsonR.docs;
        

      })
    }

    places(){
        return this.state.places.map((place,index)=>{
          return (
              <PlaceCard onRemove={this.hidePlace} place={place} key={index}/>
          )
        });
      }

    hidePlace(place) {
        this.setState({
            // filtrando los lugares, si es true pasa, si es false el nuevo arreglo generado no contendra el elemento
            places: this.state.places.filter(el => el !== place)
        })
    }

    render() {
        return(
            <section>
                <div className="bg-backgrond">
                    <Container>
                      <div className="header-main">
                        <Title></Title>
                        <Link to="/signup">
                          <Button variant="contained" color="primary">Crear cuenta</Button>
                        </Link>
                        <img className="img-illustration" src={process.env.PUBLIC_URL + '/img/placesIcon.png'} alt="Logotipo del sitio"/>
                      </div>
                      <div>
                        <Benefit></Benefit>
                      </div>
                    </Container>
                </div>
                <div style={{ "backgroundColor": indigo,'padding': '50px' , color:'white'}}>
                  <h3 style={{'fontSize': '25px'}}>Sitios populares</h3>
                    <TransitionGroup className="row">
                      {this.places()}
                    </TransitionGroup>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state, ownProps) {
  return {
    places: state.places
  }
}


export default connect(mapStateToProps)(Home)