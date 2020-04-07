import React from 'react';

import Container from '../components/container';
import Card from '@material-ui/core/Card';

export default class Place extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            place: {}
        }
    }

    render(){
        return(
            <div className="place-container">
                <header 
                        className="place-cover" 
                        style={{'backgroundImage': 'url('+this.state.place.coverImage+')'}}>

                </header>
                <Container>
                    <div className="row">
                        <div className="col-xs-12 col-md-8">
                            <Card className="place-card">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-3 col-lg-2">
                                        <img src={this.state.place.avatarImage} style={{'maxWidth': '100%'}} alt=""/>
                                    </div>
                                    <div className="col-xs">
                                        <h1>{this.state.place.title}</h1>
                                        <address>{this.state.place.address}</address>
                                        <p>{this.state.place.description}</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}