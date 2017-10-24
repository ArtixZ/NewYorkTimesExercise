import {
    GET_SEARCH    
} from '../actions/consts';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_SEARCH:
            return action.payload;
        default:
            return state
    }
}