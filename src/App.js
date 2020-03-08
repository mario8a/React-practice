import React, {Component} from 'react';
import './App.css';

import Title from './components/Title';


class App extends Component {

    // eslint-disable-next-line no-useless-constructor
    // constructor(props){
    //     super(props);

    //     // this.state = {
    //     //     numero: 0
    //     // };

    //     // this.updateNumero = this.updateNumero.bind(this)
    // }

    // updateNumero() {
    //     setInterval(() => {
    //         this.setState({
    //             numero: this.state.numero + 1
    //         })
    //     }, 1000);
    // }

    render() {
        return (
            <section>
              <div className="bg-backgrond">
                <div style={{"width": "80%", "margin": "0 auto"}}>
                <div className="header-main">
                  <Title></Title>
                  <button> Crear cuenta gratuita</button>
                  <img className="img-illustration" src={process.env.PUBLIC_URL + '/img/placesIcon.png'} alt="Logotipo del sitio"/>
                </div>
                  <div>
                    <ul>
                      <li>
                        <h3>Calificaciones con emociones</h3>
                        <p>Califica los lugares con experiencias, no con numeros</p>
                      </li>
                      <li>
                        <h3>¿Sin internet? Sin problemas</h3>
                        <p>Places funciona sin internet o en conexiones lentas</p>
                      </li>
                      <li>
                        <h3>Tus lugares favotiros</h3>
                        <p>Define tus lista de sitios favoritos</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
        )
    }
}


    


export default App;