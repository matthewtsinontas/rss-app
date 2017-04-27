import { ADD_SOURCE_SUCCESS, REFRESHED_MULTIPLE_SOURCES, DELETE_SOURCE } from '../actions/sources';
import { SELECT_ITEM_GROUP, SHOW_NEWS_ITEM } from '../actions/items';

const defaultState = {
  items: [],
  selectedItemGroup: null,
  selectedNewsItem: null
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ADD_SOURCE_SUCCESS:
      var items = state.items.concat(action.rss);
      return {...state, items};
    case REFRESHED_MULTIPLE_SOURCES:
      return {...state, items: action.items}
    case DELETE_SOURCE:
      let removedItem = state.items.slice();
      removedItem.splice(action.idx, 1);
      return {...state, items: removedItem, selectedItemGroup: null, selectedNewsItem: null}
    case SELECT_ITEM_GROUP:
      // If the item group the user has selected is the currently selected group unset it
      const selectedItemGroup = (action.selectedItemGroup === state.selectedItemGroup) ? null : action.selectedItemGroup;
      return {...state, selectedItemGroup}
    case SHOW_NEWS_ITEM:
      const { itemGroup, guid } = action;
      return {...state, selectedNewsItem: items[itemGroup].find(item => item.guid === guid)};
    default: return state;
  }
}
