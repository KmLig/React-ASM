import * as ActionTypes from './ActionTypes';


export const Salaries  = (state = {
    isLoading: true,
    errMess: null,
    salaries: []
}, action) => {
    switch(action.type) {            
        case ActionTypes.SALARIES_LOADING:
            return {...state, isLoading: true, errMess: null, salaries: []}

        case ActionTypes.SALARIES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, salaries: []}

        case ActionTypes.SALARIES_RENDERING:
            return {...state, isLoading: false, errMess: null, salaries: action.payload}

        default:
            return state;
    }
}
