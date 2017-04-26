import axios from 'axios';
import { parseRss,checkSourceListForSource } from '../../helpers/rss';

export const FETCHING_SOURCE = 'FETCHING_SOURCE';
export const DELETE_SOURCE = 'DELETE_SOURCE';
export const ADD_SOURCE_SUCCESS = 'ADD_SOURCE_SUCCESS';
export const ADD_SOURCE_FAILURE = 'ADD_SOURCE_FAILURE';

export function addSource(sourceObj) {
  return (dispatch, getState) => {
    if (checkSourceListForSource(getState().sources.sourcesList, sourceObj.source)) {
      return;
    }
    dispatch({type: FETCHING_SOURCE});
    axios.post('/get-feed', {source: sourceObj.source}).then(res => {
      const rss = parseRss(res.data.rss);
      dispatch({type: ADD_SOURCE_SUCCESS, rss, sourceObj});
    }).catch(err => {
      dispatch({type: ADD_SOURCE_FAILURE});
    });
  }
}

export function deleteSource(idx) {
  return {type: DELETE_SOURCE, idx};
}

export function fetchSources(sources = []) {
  return (dispatch, getState) => {
    dispatch({type: FETCHING_SOURCE});
    axios.post('/get-multiple-feeds', {sources}).then(res => {
      console.log("Successful fetch multiple sources", res);
    }).catch(err => {
      console.log("Failed fetch multiple sources", err);
    });
  }
}
