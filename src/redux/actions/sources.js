import axios from 'axios';
import { parseRss } from '../../helpers/rss';

export const FETCHING_SOURCE = 'FETCHING_SOURCE';
export const DELETE_SOURCE = 'DELETE_SOURCE';
export const ADD_SOURCE_SUCCESS = 'ADD_SOURCE_SUCCESS';
export const ADD_SOURCE_FAILURE = 'ADD_SOURCE_FAILURE';
export const REFRESHED_MULTIPLE_SOURCES = 'REFRESHED_MULTIPLE_SOURCES';

export function addSource(source) {
  return (dispatch, getState) => {
    if (getState().sources.sourcesList.includes(source)) {
      return;
    }
    dispatch({type: FETCHING_SOURCE});
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

export function fetchSources(sources = []) {
  return dispatch => {
    dispatch({type: FETCHING_SOURCE});
    axios.post('/get-multiple-feeds', {sources}).then(res => {
      const items = res.data.map(resData => {
        return parseRss(resData.rss);
      })
      dispatch({type: REFRESHED_MULTIPLE_SOURCES, items});
    }).catch(err => {
      dispatch({type: ADD_SOURCE_FAILURE});
    });
  }
}
