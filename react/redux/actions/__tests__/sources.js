import React from 'react';
import ReactDOM from 'react-dom';
import { addSource, updateNewSource, deleteSource } from '../sources';
import { ADD_SOURCE, UPDATE_NEW_SOURCE, DELETE_SOURCE } from '../sources';

it('returns a correct action object for: addSource', () => {
  expect(addSource()).toMatchObject({type: ADD_SOURCE});
});

it('returns a correct action object for: updateNewSource', () => {
  expect(updateNewSource("test")).toMatchObject({type: UPDATE_NEW_SOURCE, newSource: "test"});
});

it('returns a correct action object for: deleteSource', () => {
  expect(deleteSource(13)).toMatchObject({type: DELETE_SOURCE, idx: 13});
});
