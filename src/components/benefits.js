import React from 'react';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import teal400 from '@material-ui/core/colors/teal';
import red400 from '@material-ui/core/colors/red';
import orange500 from '@material-ui/core/colors/orange';


// variables colores
// const blue = blue400[400];
const teal = teal400[400];
// const teal2 = teal600[600];
const red = red400[600];
const orange = orange500[500];

export default class Benefit extends React.Component {
    render(){
        return(
            <ul>
                <Card className="card-benefit">
                    <CardContent>
                        <div className="row">
                            <div className="image-benefit" style={{'backgroundColor': teal}}>
                            <img src={process.env.PUBLIC_URL + '/img/amor.png'} alt=""/>
                            </div>
                            <div className="content-benefit">
                                <h3>Califica con emociones</h3>
                                <p>Califica segun tu experiencia</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="card-benefit">
                    <CardContent>
                        <div className="row">
                            <div className="image-benefit" style={{'backgroundColor': red}}>
                            <img src={process.env.PUBLIC_URL + '/img/sin-conexion.png'} alt=""/>
                            </div>
                            <div className="content-benefit">
                                <h3>¿Sin internet? No problem</h3>
                                <p>Este sitio funciona sin internet</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="card-benefit">
                    <CardContent>
                      <div className="row">
                        <div className="image-benefit" style={{'backgroundColor': orange}}>
                            <img src={process.env.PUBLIC_URL + '/img/estrella.png'} alt=""/>
                        </div>
                        <div className="content-benefit">
                          <h3>Tus lugares favotiros</h3>
                          <p>Define tus lista de sitios favoritos</p>
                        </div>
                      </div>
                    </CardContent>
                </Card>
            </ul>
        );
    }
}