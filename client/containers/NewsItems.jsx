import React from 'react';
import { connect } from 'react-redux';
import ItemGroup from '../components/ItemGroup.jsx';
import { selectItemGroup, showNewsItem } from '../redux/actions/items';

/**
  Container component used to display a list of the ItemGroups
  Maps the item groups from state, along with either the item group or the sub item
    if they have been selected (so the child components can know if the item has babel-preset-env
    selected or not)

  Returns a top level with after mapping the sub items groups
*/
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

function mapStateToProps(state) {
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsItems);
