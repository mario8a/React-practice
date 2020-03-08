import React, {Component} from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// Colors
import indigo400 from '@material-ui/core/colors/indigo';
// import blue400 from '@material-ui/core/colors/blue';
import teal400 from '@material-ui/core/colors/teal';
// import teal600 from '@material-ui/core/colors/teal';
import red400 from '@material-ui/core/colors/red';
import orange500 from '@material-ui/core/colors/orange';



import './App.css';

import Title from './components/Title';

// variables colores
const indigo = indigo400[400];
// const blue = blue400[400];
const teal = teal400[400];
// const teal2 = teal600[600];
const red = red400[600];
const orange = orange500[500];

class App extends Component {


    render() {
        return (
            <MuiThemeProvider>
              <div className="bg-backgrond">
                <div style={{"width": "80%", "margin": "0 auto"}}>
                <div className="header-main">
                  <Title></Title>

                  <Button variant="contained" color="primary">Crear cuenta</Button>


                  <img className="img-illustration" src={process.env.PUBLIC_URL + '/img/placesIcon.png'} alt="Logotipo del sitio"/>
                </div>
                  <div>
                  <ul>
                  <Card className="card-benefit">
                      <CardContent>
                          <div className="row">
                              <div className="image-benefit" style={{'background-color': teal}}>
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
                              <div className="image-benefit" style={{'background-color': red}}>
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
                              <div className="image-benefit" style={{'background-color': orange}}>
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
                  </div>
                </div>
              </div>
              <div style={{ "backgroundColor": indigo,'padding': '50px' }}>
                    
              </div>
            </MuiThemeProvider>
        )
    }
}


    


export default App;

//Iconos diseñados por <a href="https://www.flaticon.es/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon"> www.flaticon.es</a>