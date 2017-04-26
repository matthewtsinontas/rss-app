import React from 'react';
import { connect } from 'react-redux';
import ItemGroup from '../components/ItemGroup.jsx';

class NewsItems extends React.Component {

  render() {
    return (
      <div>
        <h1>Items</h1>
        {this.props.items.map(item =>
          <ItemGroup
            key={item.link}
            title={item.title}
            desc={item.description}
            link={item.link}
            items={item.items}
          />
        )}
      </div>
    )
  }

}

function mapProps(state) {
  return {
    items: state.items.items
  }
}

export default connect(mapProps)(NewsItems);
