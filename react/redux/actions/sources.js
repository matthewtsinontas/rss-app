export const ADD_SOURCE = 'ADD_SOURCE';
export const UPDATE_NEW_SOURCE = 'UPDATE_NEW_SOURCE';
export const DELETE_SOURCE = 'DELETE_SOURCE';

export function addSource() {
  return {type: ADD_SOURCE};
}

export function updateNewSource(newSource) {
  return {type: UPDATE_NEW_SOURCE, newSource}
}

export function deleteSource(idx) {
  return {type: DELETE_SOURCE, idx};
}
