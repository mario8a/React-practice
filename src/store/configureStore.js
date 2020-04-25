import {createStore, combineReducers, compose} from 'redux';
import persistState from 'redux-localstorage';
import reducers from '../reducers';

const enhancer = compose(
    persistState('user')
)

const rootReducer = combineReducers({
    ...reducers
})

export default function configireStore() {
    // El segundo argumento es el valor iniial del contenedor
    return createStore(rootReducer, {}, enhancer);
}
