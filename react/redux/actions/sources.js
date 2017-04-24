import axios from 'axios';
import { parseRss } from '../../helpers/rss';

export const ADD_SOURCE = 'ADD_SOURCE';
export const DELETE_SOURCE = 'DELETE_SOURCE';
export const ADD_SOURCE_SUCCESS = 'ADD_SOURCE_SUCCESS';
export const ADD_SOURCE_FAILURE = 'ADD_SOURCE_FAILURE';

export function addSource(source) {
  return (dispatch, getState) => {
    if (getState().sources.sourcesList.includes(source)) {
      return;
    }
    dispatch({type: ADD_SOURCE});
    axios.post('/get-feed', {source}).then(res => {
      const rss = parseRss(res.data.rss);
      dispatch({type: ADD_SOURCE_SUCCESS, rss, source});
    }).catch(err => {
      dispatch({type: ADD_SOURCE_FAILURE});
    });
  }
}

export function deleteSource(idx) {
  return {type: DELETE_SOURCE, idx};
}
