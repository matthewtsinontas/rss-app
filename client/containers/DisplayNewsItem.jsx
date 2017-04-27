import React from 'react';
import { connect } from 'react-redux';


/**
  Container component used to display the news item

  Maps to state to gather the object of the selected news item and renders some
    details about the item before injecting any html content which was also
    supplied as part of the item object
  If there is no item to display, simply returns an empty div
*/
class DisplayNewsItem extends React.Component {

  render() {
    const item = this.props.selectedItem;
    if (!item) {
      return <div />;
    }
    return (
      <div className="display-item">
        <h2>{item.title} - <a href={item.link} target="_blank">Link</a></h2>
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

function mapStateToProps(state) {
  return {
    selectedItem: state.items.selectedNewsItem
  }
}

export default connect(mapStateToProps)(DisplayNewsItem);
