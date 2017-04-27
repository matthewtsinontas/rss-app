import React from 'react';
import { connect } from 'react-redux';
import ItemGroup from '../components/ItemGroup.jsx';
import { selectItemGroup, showNewsItem } from '../redux/actions/items';

class NewsItems extends React.Component {

  render() {
    return (
      <div className="news-items">
        {this.props.items.map((item, i) =>
          <ItemGroup
            key={item.link}
            title={item.title}
            desc={item.description}
            link={item.link}
            items={item.items}
            selected={i === this.props.selectedItemGroup}
            selectItemGroup={() => {this.props.selectItemGroup(i)}}
            selectSubItem={(guid) => {this.props.showNewsItem(i, guid)}}
            selectedNewsItem={this.props.selectedNewsItem}
          />
        )}
      </div>
    )
  }

}

function mapProps(state) {
  return {
    items: state.items.items,
    selectedItemGroup: state.items.selectedItemGroup,
    selectedNewsItem: state.items.selectedNewsItem
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectItemGroup: (i) => {
      dispatch(selectItemGroup(i))
    },
    showNewsItem: (i, guid) => {
      dispatch(showNewsItem(i, guid));
    }
  }
}

export default connect(mapProps, mapDispatchToProps)(NewsItems);
