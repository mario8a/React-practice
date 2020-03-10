import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

export default class PlaceHorizontal extends React.Component {
    render() {
        return(
            <Card style={{'marginTop': '1em', 'overflow': 'hidden'}}>
              <div className="row">
                <div className="planceH-avatar">
                  <img src={this.props.place.imageURL} alt=""/>
                </div>
                <div className="col-xs" style={{'textAlign': 'left'}}>
                  <CardHeader 
                    title={this.props.place.title}
                    subheader={this.props.place.adress}
                  />
                  <div className="row middle-xs">
                    <div className="col-xs-6 col-sm-8 col-lg-9">
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {this.props.place.description}
                        </Typography>
                      </CardContent>
                    </div>
                    <div className="col-xs">
                      <CardActions>
                        <Button color="primary">Ver más</Button>
                      </CardActions>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
        )
    }
}