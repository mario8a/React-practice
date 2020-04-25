export default function userReduer(state= {name: 'Mario'}, action) {
    switch (action.type) {
        case 'LOG_IN':
            return {jwt: action.jwt}
        default:
            return state;
    }
}

// Si no se retorna el state, lo que hara sera borrar esa parte del almacenamiento del reducer