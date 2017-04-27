import axios from 'axios';
import { parseRss } from '../../helpers/rss';

// Constants for the actions + related reducer cases
export const FETCHING_SOURCE = 'FETCHING_SOURCE';
export const DELETE_SOURCE = 'DELETE_SOURCE';
export const ADD_SOURCE_SUCCESS = 'ADD_SOURCE_SUCCESS';
export const ADD_SOURCE_FAILURE = 'ADD_SOURCE_FAILURE';
export const REFRESHED_MULTIPLE_SOURCES = 'REFRESHED_MULTIPLE_SOURCES';

/**
  Action creator for fetching a sources rss feed. Accepts a single source as a
  string param, checks if the source exists in state already (if so, it skips it).

  A loading action gets dispatched before the call to the node api is called, with
  success and error actions being dispatched on the result

  @param {String} source
  @return {Function}
*/
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

/**
  Takes an array of sources and dispatches it to a node api endpoint to fetch
  the data from all (similar to the addSource action). Used for refreshing the feed
  either automatically (every 5 minutes) or manualy on the button press

  @param {Array} sources
  @returns {Function}
*/
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

/**
  Action creator to delete a source. Doesnt communicate with the node API so can
  return a simple plain object. Takes the array index of the item so it may be spliced
  out

  @param {int} idx
  @returns {Object}
*/
export function deleteSource(idx) {
  return {type: DELETE_SOURCE, idx};
}
