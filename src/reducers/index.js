import { combineReducers } from 'redux';
import HomePageReducers from './HomePageReducers';

const rootReducer = combineReducers({
  homeStories: HomePageReducers
});

export default rootReducer;
