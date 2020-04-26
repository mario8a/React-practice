import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import persistState from 'redux-localstorage';
import reducers from '../reducers';

import { routerReducer } from 'react-router-redux';

// const enhancer = compose(
//     persistState('user')
// )

const rootReducer = combineReducers({
    ...reducers,
    router: routerReducer
})

// export default function configireStore(middleware) {
//     // El segundo argumento es el valor iniial del contenedor
//     return createStore(
//         rootReducer, 
//         applyMiddleware(middleware), 
//         enhancer);
// }

export default function configureStore(middleware){ 
    return createStore( 
        rootReducer, 
        compose( persistState('user'), applyMiddleware(middleware), ) ); 
    }

