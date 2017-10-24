import moment from 'moment';

import {
    TOP_STORY,
    ARCHIVE_STORY,
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
        case ARCHIVE_STORY:
            const weekStory = [];
            for(let i=action.payload.length-1;i>0;i--) {
                if(moment(action.payload[i].pub_date).isBefore(moment().subtract(7,'d'))) break;
                if(action.payload[i].multimedia.length>0){
                    weekStory.push(action.payload[i]);
                }
            }
            return {...state, archiveStory: weekStory, archiveStoryLoading: false}
        default: 
            return state;
    }
}