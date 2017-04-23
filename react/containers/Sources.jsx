import React from 'react';
import { connect } from 'react-redux';
import SourceListItem from '../components/SourceListItem.jsx';
import { addSource, updateNewSource, deleteSource } from '../redux/actions/sources';

class Sources extends React.Component {

  constructor() {
    super();
    this.addSource = this.addSource.bind(this);
  }

  render() {
    return (
      <div>
        <p>Sources List</p>
        <form onSubmit={this.addSource}>
          <input type="text" value={this.props.newSource} onChange={e => {this.props.updateNewSource(e.target.value)}}/>
          <button type="submit">Add new source</button>
        </form>
        {this.props.sources.map((source, i) => (
          <SourceListItem key={source} source={source} deleteItem={e => {this.props.deleteItem(i)}}/>
        ))}
      </div>
    )
  }

  addSource(e) {
    e.preventDefault();
    this.props.addSource();
  }
}

function mapProps(state) {
  return {
    sources: state.sources.sourcesList,
    newSource: state.sources.newSource
  }
}

function mapDispatch(dispatch) {
  return {
    addSource: () => {
      dispatch(addSource());
    },
    updateNewSource: (newSource) => {
      dispatch(updateNewSource(newSource));
    },
    deleteItem: (idx) => {
      dispatch(deleteSource(idx));
    }
  }
}

export default connect(mapProps, mapDispatch)(Sources);
