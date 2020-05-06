export default function visitsReducer(state = [],action){
    switch(action.type){
      case 'LOAD_VISITS':
        // console.log('REDUCER', action.visits);
        return action.visits;
      case 'ADD_VISIT':
        //   console.log(action.visit);
        return [action.visit].concat(state);
      default:
        return state;
    }
  }
  