export default function visitsReducer(state = [],action){
    switch(action.type){
      case 'ADD_VISIT':
        //   console.log(action.visit);
        return [action.visit].concat(state);
      default:
        return state;
    }
  }
  