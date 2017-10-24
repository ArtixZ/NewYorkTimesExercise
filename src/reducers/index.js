import { combineReducers } from 'redux';
import HomePageReducers from './HomePageReducers';
import SearchReducers from './SearchReducers';

const rootReducer = combineReducers({
  homeStories: HomePageReducers,
  searchRes: SearchReducers
});

export default rootReducer;
