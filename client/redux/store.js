import { createStore, combineReducers, applyMiddleware } from 'redux';
import sources from './reducers/sources';
import items from './reducers/items';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  sources, items
});

export default createStore(reducers, applyMiddleware(thunk));
