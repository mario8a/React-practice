import React, { Component } from 'react';
import FadeAndScale from '../animations/FadeAndScale';

import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';
import Emoji from './emoji_picker/Emoji'
import {relationInverse} from './emoji_picker/Emojis';

export default class Visit extends Component {

    getShortCode() {
        if(!this.props.visit.reaction) return relationInverse["love"];

        return relationInverse[this.props.visit.reaction];
    }

    render() {
        return (
            <FadeAndScale in={this.props.in}>
                <div>
                    <Card style={{'textAlign': 'left', 'marginTop': '1em'}}>
                        <div className="row middle-xs">
                            <div className="col-xs">
                                <CardHeader avatar={
                                                <Avatar src="https://pm1.narvii.com/6254/ed3cda72c9dbd4bbc5a3f1d9334c7602f1ec1b40_hq.jpg"/>
                                            }
                                            title="Mario" 
                                            subheader={this.props.visit.observation}>

                                </CardHeader>
                            </div>
                            <div className="col-xs-2 col-sm-1 col-lg-3">
                                    <Emoji code={this.getShortCode()}/>
                            </div>
                        </div>
                    </Card>
                </div>
            </FadeAndScale>
        )
    }
}
