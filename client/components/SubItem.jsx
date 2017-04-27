import React from 'react';

/**
  Component to display a subItem (individual article from a feed)
  It displays the title and description inside a single div, with a selected
    class being applied if this item is the one being viewed.
  Also contains an onClick handler to dispatch an action to "select" this item
*/
const SubItem = ({title, description, selectSubItem, guid, selected}) => (
  <div className={`sub-item ${selected ? "selected" : ""}`} onClick={e => {selectSubItem(guid)}}>
    <p>{title}</p>
    <span>{description}</span>
  </div>
);

export default SubItem;
