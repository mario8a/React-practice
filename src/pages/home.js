import React from 'react';

import Button from '@material-ui/core/Button';

// Colors
import indigo400 from '@material-ui/core/colors/indigo';

import Title from '../components/Title';
import data from '../request/places';
import Container from '../components/container';

import Benefit from '../components/benefits';
import PlaceCard from '../components/places/placeCard';

import { TransitionGroup } from 'react-transition-group';

// variables colores
const indigo = indigo400[400];


export default class Home extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            places: []
        }

        setTimeout(() => this.setState({places: data.places}), 2000)

        //Evita que el valor de this cambie reasignando la funcion
        this.hidePlace = this.hidePlace.bind(this)
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

                        <Button variant="contained" color="primary">Crear cuenta</Button>
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