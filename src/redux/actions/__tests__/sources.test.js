import React from 'react';
import { addSource, deleteSource } from '../sources';
import { ADD_SOURCE, DELETE_SOURCE } from '../sources';

it('returns a correct action object for: deleteSource', () => {
  expect(deleteSource(13)).toMatchObject({type: DELETE_SOURCE, idx: 13});
});
