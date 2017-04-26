import { ADD_SOURCE_SUCCESS, REFRESHED_MULTIPLE_SOURCES } from '../actions/sources';

const defaultState = {
  items: []
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ADD_SOURCE_SUCCESS:
      var newItem = {name: action.sourceObj.name, items: action.rss.items};
      return {...state, items: state.items.concat(newItem)};
    case REFRESHED_MULTIPLE_SOURCES:
      return {...state, items: action.items}
      return state;
    default: return state;
  }
}
