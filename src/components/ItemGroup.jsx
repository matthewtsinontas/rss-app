import React from 'react';

const ItemGroup = ({title, desc, link, items}) => (
  <div>
    <p>Title: {title}</p>
    <p>Description: {desc}</p>
    <p><a href={link}>Link to site</a></p>
    <p>Number of items to view: {items.length}</p>
  </div>
);

export default ItemGroup;
