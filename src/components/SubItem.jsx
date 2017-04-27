import React from 'react';

const SubItem = ({title, description, selectSubItem, guid}) => (
  <div className="sub-item" onClick={e => {selectSubItem(guid)}}>
    <p>{title}</p>
    <span>{description}</span>
  </div>
);

export default SubItem;
