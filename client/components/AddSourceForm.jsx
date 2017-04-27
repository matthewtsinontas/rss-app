import React from 'react';

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
