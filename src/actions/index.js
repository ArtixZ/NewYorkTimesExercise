import {
    TOP_STORY,
    ARCHIVE_STORY,
    GET_SEARCH
} from './consts';
import moment from 'moment';

const curYear = moment().year();
const curMonth = moment().month()+1;
const APIKey = "a8457610b68381085a3fff38d6a36337:6:74255139";
const topStoryAPI = "https://api.nytimes.com/svc/topstories/v2/home.json";
const archiveAPI = `https://api.nytimes.com/svc/archive/v1/${curYear}/${curMonth}.json`;
const searchAPI = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

const callAPI = (method, url, params) => {

    params = {...params, "api-key": APIKey};
    url = new URL(url);

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    return fetch(url, {
        method: method,
    }).then(res => {
        return res.json()
    }).catch(err => 
        console.log(err)
    )
    // return fetch(url, {
    //     "async": true,
    //     "crossDomain": true,
    //     "method": method,
    //     "headers": {
    //       "api-key": APIKey,
    //       "cache-control": "no-cache",
    //       "postman-token": "7b2fc5be-c7d6-0c1f-6cfc-ba7abaa4aeac"
    //     }       
    // }).then(res => {
    //     return res.json()
    // })
}

// home actions
const dispathTopStory = (payload) => {
    return {
        type: TOP_STORY,
        payload
    }
}
export const getTopStory = () => {
    return( dispatch, getState )=> {
        callAPI('GET', topStoryAPI).then( res =>{
            dispatch(dispathTopStory(res.results));
        })
    }
}

const dispatchArchiveStory = (payload) => {
    return {
        type: ARCHIVE_STORY,
        payload
    }
}

export const getArchiveStory = () => {
    return( dispatch, getState ) => {
        callAPI('GET', archiveAPI).then( res => {
            dispatch(dispatchArchiveStory(res.response.docs));
        })
    }
}

// search actions

const dispatchSearchRes = (payload) => {
    return {
        type: GET_SEARCH,
        payload
    }
}
export const getSearchRes = (searchVal) => {
    return(dispatch, getState) => {
        callAPI('GET', searchAPI, {
            q: searchVal
        }).then( res => {
            dispatch(dispatchSearchRes(res.response.docs));
        })
    }
}
export const clearSearchRes = () => {
    return(dispatch) => {
        dispatch(dispatchSearchRes(null));
    }
}