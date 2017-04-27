import React from 'react';

/**
  Component for the form to subscribe to a new sources
  Displays a form with a single input which accepts a value with an onSubmit
    method and some loading states
*/
const AddSourceForm = ({newSource, loading, updateNewSource, addNewSource}) => (
  <form onSubmit={addNewSource} className="form-inline">
    <div className="form-group">
      <input
        className="form-control"
        disabled={loading}
        type="text"
        value={newSource}
        onChange={updateNewSource}
        placeholder="Add news source"
      />
    </div>
    <button disabled={loading} type="submit" className="btn btn-success">
      {loading ? "Loading ..." : "Add"}
    </button>
  </form>
);

export default AddSourceForm;
