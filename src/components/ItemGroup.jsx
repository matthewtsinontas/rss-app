import React from 'react';
import SubItem from './SubItem.jsx';

const ItemGroup = ({title, desc, link, items, selected, selectItemGroup, selectSubItem}) => (
  <div className="item-group">
    <div className={`item-group-head ${selected ? "selected" : ""}`} onClick={selectItemGroup}>
      <h3 className="item-title"><a href={link} target="_blank">{title}</a></h3>
      <p className="item-desc">{desc}</p>
    </div>
    {selected ? (
      <div className="item-sub-items">
        {items.map(i => (
          <SubItem
            key={i.guid}
            title={i.title}
            description={i.description}
            selectSubItem={selectSubItem}
            guid={i.guid}
          />
        ))}
      </div>
    ) : null}
  </div>
);

export default ItemGroup;
