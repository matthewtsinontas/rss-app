import React from 'react';
import { selectItemGroup, showNewsItem } from '../items';
import { SELECT_ITEM_GROUP, SHOW_NEWS_ITEM } from '../items';

it('returns a correct action object for: selectItemGroup', () => {
  expect(selectItemGroup(1)).toMatchObject({type: SELECT_ITEM_GROUP, selectedItemGroup: 1});
});

it('returns a correct action object for: showNewsItem', () => {
  expect(showNewsItem(1, "abcd")).toMatchObject({type: SHOW_NEWS_ITEM, itemGroup: 1, guid: "abcd"});
});
