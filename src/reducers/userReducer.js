export default function userReduer(state= {name: 'Mario'}, action) {
    switch (action.type) {
        case 'LOG_IN':
            return Object.assign({}, state, {jwt: action.jwt});
        case 'LOG_OUT':
            return {};
        case 'LOAD_USER':
            return Object.assign({}, state, {
                name: action.user.name,
                _id: action.user._id,
                email: action.user.email
            })
        default:
            return state;
    }
}
// Si no se retorna el state, lo que hara sera borrar esa parte del almacenamiento del reducer
// object.assignt clona el state