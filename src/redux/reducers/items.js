import { ADD_SOURCE_SUCCESS } from '../actions/sources';

const defaultState = {
  items: []
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ADD_SOURCE_SUCCESS:
      return {...state, items: state.items.concat(action.rss.items)};
    default: return state;
  }
}
