import { createStore, combineReducers } from 'redux';
import sources from './reducers/sources';

const reducers = combineReducers({
  sources
});

export default createStore(reducers);
