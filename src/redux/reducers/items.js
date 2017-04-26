import { ADD_SOURCE_SUCCESS, REFRESHED_MULTIPLE_SOURCES } from '../actions/sources';

const defaultState = {
  items: []
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ADD_SOURCE_SUCCESS:
      var items = state.items.concat(action.rss);
      return {...state, items};
    case REFRESHED_MULTIPLE_SOURCES:
      return {...state, items: action.items}
    default: return state;
  }
}
