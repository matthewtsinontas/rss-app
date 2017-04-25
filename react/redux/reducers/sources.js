import { ADD_SOURCE, DELETE_SOURCE, ADD_SOURCE_FAILURE, ADD_SOURCE_SUCCESS } from '../actions/sources';
import { checkSourceListForSource } from '../../helpers/rss';

const defaultState = {
  sourcesList: [],
  error: false,
  loading: false
};

export default function (state = defaultState, action) {
  switch (action.type) {

    // Case to add a new source to the list of sources which are polled for data
    case ADD_SOURCE:
      return {...state, loading: true}

    // Case to remove a source item by splicing it out of the array of sources
    case DELETE_SOURCE:
      let removedList = state.sourcesList.slice();
      removedList.splice(action.idx, 1);
      return {...state, sourcesList: removedList}

    // Case if the fetch of an rss feed failed for whatever reason...
    case ADD_SOURCE_FAILURE:
      return {...state, error: true, loading: false};

    // Case if the adding of source is successful, add it into the list
    case ADD_SOURCE_SUCCESS:
      const newSource = action.sourceObj;
      let sourcesList = state.sourcesList.slice();
      sourcesList.push(newSource);
      return {...state, sourcesList, error: false, loading: false};

    default: return state;
  }
}
