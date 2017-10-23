import {
    TOP_STORY
} from '../actions/consts';


const INITIAL_STATE = {
    archiveStory: [],
    archiveStoryLoading: true,
    topStory:[],
    topStoryLoading: true,
}
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case TOP_STORY:
            return {...state, topStory: action.payload, topStoryLoading: false}
        default: 
            return state;
    }
}