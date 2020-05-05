import React from 'react';

import Container from '../components/container';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import {getPlace} from '../request/places';

import { withRouter } from "react-router";
import VisitForm from '../components/visits/VisitForm';

class Place extends React.Component {
    constructor(props){
        super(props);
        // console.log(props);
        const slug = props.match.params.slug;
        this.loadPlace(slug)

        this.state = {
            place: {}
        }
    }

    loadPlace(slug) {
        getPlace(slug).then(resp => {
            console.log(resp);

            this.setState( {
                place: resp
            })
        })
    }

    

    render(){
        const {place} = this.state;
        return(
            <div className="place-container">
            
                <header 
                        className="place-cover" 
                        style={{'backgroundImage': 'url('+place.coverImage+')'}}>

                </header>
                <Container>
                    <div className="row">
                        <div className="col-xs-12 col-md-8">
                            <Card className="place-card">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-3 col-lg-2">
                                        <img src={place.avatarImage} style={{'maxWidth': '100%'}} alt=""/>
                                    </div>
                                    <div className="col-xs">
                                        <h1>{place.title}</h1>
                                        <address>{place.address}</address>
                                        <p>{place.description}</p>
                                    </div>
                                </div>
                                <div style={{'marginTop': '1em'}}>
                                
                                    <VisitForm place={place}/>

                                </div>
                            </Card>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}


export default withRouter(Place);