///Se va encargar de manipular las acciones de los negocios

export default function placesReducer(state = [1], action) {
    switch (action.type) {
        case 'LOAD_PLACES':
            return action.places    
        default:
            return state;
    }
}

// Si no se retorna el state, lo que hara sera borrar esa parte del almacenamiento del reducer