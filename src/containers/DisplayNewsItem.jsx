import React from 'react';
import { connect } from 'react-redux';

class DisplayNewsItem extends React.Component {

  render() {
    console.log(this.props.selectedItem);
    return <p>Display</p>
  }

}

function mapProps(state) {
  return {
    selectedItem: state.items.selectedNewsItem
  }
}

export default connect(mapProps)(DisplayNewsItem);
