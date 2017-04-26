import React from 'react';
import { connect } from 'react-redux';

class NewsItems extends React.Component {

  render() {
    return (
      <div>News Items go here</div>
    )
  }

}

function mapProps(state) {
  return {
    items: state.items.items
  }
}

export default connect(mapProps)(NewsItems);
