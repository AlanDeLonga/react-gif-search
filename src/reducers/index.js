import { combineReducers } from 'redux';
import GifReducer from './gifs';

const rootReducer = combineReducers({
  gifs: GifsReducer
});

export default rootReducer;
