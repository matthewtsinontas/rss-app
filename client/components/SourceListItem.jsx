import React from 'react';

const SourceListItem = ({source, deleteItem}) => (
  <li>{source} - <a href="#" onClick={deleteItem}>delete</a></li>
);

export default SourceListItem;
