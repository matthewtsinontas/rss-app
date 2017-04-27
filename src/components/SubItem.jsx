import React from 'react';

const SubItem = ({title, description, selectSubItem, guid, selected}) => (
  <div className={`sub-item ${selected ? "selected" : ""}`} onClick={e => {selectSubItem(guid)}}>
    <p>{title}</p>
    <span>{description}</span>
  </div>
);

export default SubItem;
