import React from 'react';
import { connect } from 'react-redux';

class DisplayNewsItem extends React.Component {

  render() {
    const item = this.props.selectedItem;
    if (!item) {
      return (
        <div />
      )
    }
    return (
      <div className="display-item">
        <h1>{item.title} - <a href={item.link} target="_blank">Link</a></h1>
        <p>{item.pubDate}</p>
        {item.thumbnail ? (
          <img src={item.thumbnail.url} />
        ) : null}
        <p>{item.description}</p>
        {item.content ? (<div dangerouslySetInnerHTML={{__html: item.content}}/>) : null }
      </div>
    )
  }

}

function mapProps(state) {
  return {
    selectedItem: state.items.selectedNewsItem
  }
}

export default connect(mapProps)(DisplayNewsItem);
