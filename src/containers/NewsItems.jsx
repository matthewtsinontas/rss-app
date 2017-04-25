import React from 'react';
import { connect } from 'react-redux';

class NewsItems extends React.Component {

  render() {
    return (
      <div>{this.props.items.map(i => <p>{i.title}</p>)}</div>
    )
  }

}

function mapProps(state) {
  return {
    items: state.items.items
  }
}

export default connect(mapProps)(NewsItems);
