import config from '../config/secrets';

function getPlaces(){
    // return fetch(config.url + "/places")
    return fetch(`${config.url}/places`)
    .then(data => {
        return data.json();
    })
    .catch(console.log)
}

function getPlace(slug) {
    // return fetch(config.url + "/places/"+ slug)
    return fetch(`${config.url}/places/${slug}`)
    .then(data => {
        return data.json();
    })
    .catch(console.log)
}

function createPlace(data,jwt) {

    let formData = new FormData();

    for(let field in data) {
        //field es el nombre del campo
        formData.append(field, data[field])
    }

    return fetch(config.url + '/places', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer '+ jwt
        }
    }).then(dataRemote => {
        return dataRemote.json();
    })
}

export {getPlaces, getPlace, createPlace};

export default {
    places: [ 
        { 
            imageURL: '/img/taquearte.jpg',
            title: 'Taqueria taquearte',
            description: 'Taquearte… Tacos en serio. Rendirle honor al principal símbolo gastronómico de nuestro país es nuestro deber',
            adress: ' Culiacan 51, Hipódromo, Cuauhtémoc, 06100 Ciudad de México, CDMX'
        },
        { 
            imageURL: '/img/malafama.jpg',
            title: 'Salon Malafama',
            description: 'Nada como un juego de billar y una cervecita para relajarse después del trabajo.' ,
            adress: ' Av Michoacán 78, Colonia Condesa, Cuauhtémoc, 06140 Ciudad de México, CDMX'
        },
        { 
            imageURL: '/img/perroNegro.jpg', 
            title: 'Pizza del perro negro', 
            description: 'Perro Negro es más que un lugar de pizzas, cerveza y rock, te sentirás parte de la jauría liderada por un bulldog en la Roma, Coyoacán y Centro Histórico.',
            adress: 'Donceles 64, Centro Histórico de la Cdad. de México, Centro, Cuauhtémoc, 06000 Ciudad de México, CDMX'
        }, 
    ]
}