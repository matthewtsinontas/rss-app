import React from 'react';

const SourceListItem = ({source, deleteItem}) => (
  <li>{source} - <a onClick={deleteItem}>delete</a></li>
);

export default SourceListItem;
