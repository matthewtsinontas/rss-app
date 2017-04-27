import React from 'react';

/**
  Component for the form to subscribe to a new sources
  Displays a form with a single input which accepts a value with an onSubmit
    method and some loading states
*/
const AddSourceForm = ({newSource, loading, updateNewSource, addNewSource}) => (
  <form onSubmit={addNewSource}>
    <input
      disabled={loading}
      type="text"
      value={newSource}
      onChange={updateNewSource}
      placeholder="Add news source"
    />
    <button disabled={loading} type="submit">
      {loading ? "Loading ..." : "Add new source"}
    </button>
  </form>
);

export default AddSourceForm;
