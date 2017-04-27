export const SELECT_ITEM_GROUP = "SELECT_ITEM_GROUP";
export const SHOW_NEWS_ITEM = "SHOW_NEWS_ITEM";

/**
  Action creator for selecting an item group to display its sub items. accepts
  an int for the index of the object in the collection (could defo improve this)

  @param {int} selectedItemGroup
  @returns {Object}
*/
export function selectItemGroup(selectedItemGroup) {
  return {type: SELECT_ITEM_GROUP, selectedItemGroup}
}

/**
  Action creator for selecting to display a sub-item. Accepts the index of the group
  that the item belongs too, then searches for the item with the same guid so it can
  be passed as a "selected sub item" 

  @param {int} itemGroup
  @param {String} guid
  @returns {Object}
*/
export function showNewsItem(itemGroup, guid) {
  return {type: SHOW_NEWS_ITEM, itemGroup, guid};
}
