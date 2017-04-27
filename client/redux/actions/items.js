export const SELECT_ITEM_GROUP = "SELECT_ITEM_GROUP";
export const SHOW_NEWS_ITEM = "SHOW_NEWS_ITEM";

export function selectItemGroup(selectedItemGroup) {
  return {type: SELECT_ITEM_GROUP, selectedItemGroup}
}

export function showNewsItem(itemGroup, guid) {
  return {type: SHOW_NEWS_ITEM, itemGroup, guid};
}
