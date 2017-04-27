import React from 'react';

/**
  Component to render a list item for a source that you have subscribed to
  Simple list item which displays a source and attaches a "delete" button which
    can fire an action
*/
const SourceListItem = ({source, deleteItem}) => (
  <li>{source} - <a href="#" onClick={deleteItem}>delete</a></li>
);

export default SourceListItem;
