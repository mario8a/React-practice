import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import {
  Link
} from "react-router-dom";

export default class PlaceHorizontal extends React.Component {
    render() {
      const {place} = this.props;
        return(
            <Card style={{'marginTop': '1em', 'overflow': 'hidden'}}>
              <div className="row">
                <div className="planceH-avatar">
                  <img src={place.avatarImage} alt=""/>
                </div>
                <div className="col-xs" style={{'textAlign': 'left'}}>
                  <CardHeader 
                    title={place.title}
                    subheader={this.props.place.adress}
                  />
                  <div className="row middle-xs">
                    <div className="col-xs-6 col-sm-8 col-lg-9">
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {place.description}
                        </Typography>
                      </CardContent>
                    </div>
                    <div className="col-xs">
                      <CardActions>
                        <Link to={'/lugares/'+ place.slug}>
                          <Button color="primary">Ver más</Button>
                        </Link>
                      </CardActions>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
        )
    }
}