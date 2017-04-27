import React from 'react';
import SubItem from './SubItem.jsx';

/**
  Item group display component. Displays the main block of the item group with some basic
    information including the title and description.

  If that group is being "viewed" then iterate over the sub items and display them
*/
const ItemGroup = ({title, desc, link, items, selected, selectItemGroup, selectSubItem, selectedNewsItem}) => (
  <div className="item-group">
    <div className={`row item-group-head ${selected ? "selected" : ""}`} onClick={selectItemGroup}>
      <div className="col-sm-11">
        <h3 className="item-title">{title} - <a href={link} target="_blank">visit</a></h3>
        <p className="item-desc">{desc}</p>
      </div>
      <div className="col-sm-1 arrow-icon">
        <span className={`glyphicon glyphicon-menu-${selected ? "down" : "up"}`} aria-hidden="true" />
      </div>
    </div>
    {selected ? (
      <div className="item-sub-items">
        {items.map(i => (
          <SubItem
            key={i.guid || i.title }
            title={i.title}
            description={i.description}
            selectSubItem={selectSubItem}
            guid={i.guid}
            selected={selectedNewsItem && i.guid === selectedNewsItem.guid}
          />
        ))}
      </div>
    ) : null}
  </div>
);

export default ItemGroup;
