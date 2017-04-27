import { ADD_SOURCE_SUCCESS, REFRESHED_MULTIPLE_SOURCES, DELETE_SOURCE } from '../actions/sources';
import { SELECT_ITEM_GROUP, SHOW_NEWS_ITEM } from '../actions/items';

const defaultState = {
  items: [],
  selectedItemGroup: null,
  selectedNewsItem: null
};

export default function(state = defaultState, action) {
  switch (action.type) {
    // Case for when a source has been loaded successfully, adding it into the list
    case ADD_SOURCE_SUCCESS:
      var items = state.items.concat(action.rss);
      return {...state, items, selectedItemGroup: items.length - 1};

    // Case for when a feed refresh has been successful, adding those items into the list
    case REFRESHED_MULTIPLE_SOURCES:
      return {...state, items: action.items}

    // Case for when a user removes a source, need to also remove the items from here as well
    case DELETE_SOURCE:
      let removedItem = state.items.slice();
      removedItem.splice(action.idx, 1);
      return {...state, items: removedItem, selectedItemGroup: null, selectedNewsItem: null}

    // Case for when a user cicks to "select" an item group to display its sub items
    case SELECT_ITEM_GROUP:
      // If the item group the user has selected is the currently selected group unset it
      const selectedItemGroup = (action.selectedItemGroup === state.selectedItemGroup) ? null : action.selectedItemGroup;
      return {...state, selectedItemGroup}

    // Case for when a user clicks to view a sub item
    case SHOW_NEWS_ITEM:
      const { itemGroup, guid } = action;
      return {...state, selectedNewsItem: state.items[itemGroup].items.find(item => item.guid === guid)};
    default: return state;
  }
}
