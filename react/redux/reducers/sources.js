import { ADD_SOURCE, UPDATE_NEW_SOURCE, DELETE_SOURCE } from '../actions/sources';

const defaultState = {
  sourcesList: [],
  newSource: ""
};

export default function (state = defaultState, action) {
  switch (action.type) {

    // Case to add a new source to the list of sources which are polled for data
    case ADD_SOURCE:
      const newSource = state.newSource;
      // Checking if the source already exists in the list
      // If so, clear the input but dont update the list
      if (state.sourcesList.includes(newSource)) {
        return {...state, newSource: ""};
      }
      // At this point, we don't hae the item in state, so slice the array
      // add it, and update
      let sourcesList = state.sourcesList.slice();
      sourcesList.push(newSource);
      return {...state, sourcesList, newSource: ""};

    // Case to update the text field with a new value (controller forms n that...)
    case UPDATE_NEW_SOURCE:
      return {...state, newSource: action.newSource};

    // Case to remove a source item by splicing it out of the array of sources
    case DELETE_SOURCE:
      let removedList = state.sourcesList.slice();
      removedList.splice(action.idx, 1);
      return {...state, sourcesList: removedList}
    default: return state;
  }
}
