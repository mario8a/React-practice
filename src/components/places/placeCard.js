import React from 'react';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';


export default class PlaceCard extends React.Component {
    render(){
        return(
            <div className="col-xs-12 col-sm-4 div-card" key={this.props.index} >
                    <Card>
                        <CardMedia>
                            <img className="img-place" src={process.env.PUBLIC_URL + this.props.place.imageURL} alt=""/>
                        </CardMedia>
                        <CardContent>
                            <Typography className="title-card" gutterBottom variant="h5" component="h2">
                                {this.props.place.title}
                            </Typography>
                            <Typography  variant="body2" color="textSecondary" component="p">
                                {this.props.place.description}
                            </Typography>
                            <CardActions>
                              <Button color="secondary" size="small">Ver más</Button>
                              <Button color="secondary" onClick={() => this.props.onRemove(this.props.place)} size="small">Ocultar</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </div>
        );
    }
}