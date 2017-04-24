import React from 'react';
import { connect } from 'react-redux';
import SourceListItem from '../components/SourceListItem.jsx';
import { addSource, updateNewSource, deleteSource } from '../redux/actions/sources';

class Sources extends React.Component {

  constructor() {
    super();
    this.state = {
      newSource: ""
    };
    this.addSource = this.addSource.bind(this);
    this.updateNewSource = this.updateNewSource.bind(this);
  }

  render() {
    return (
      <div>
        <p>Sources List</p>
        <form onSubmit={this.addSource}>
          <input type="text" value={this.state.newSource} onChange={this.updateNewSource}/>
          <button type="submit">Add new source</button>
        </form>
        {this.props.error ? (
          <p>There was an error with that source, please try again...</p>
        ) : null}
        {this.props.sources.map((source, i) => (
          <SourceListItem key={source} source={source} deleteItem={e => {this.props.deleteItem(i)}}/>
        ))}
        <p>number of items: {this.props.items.length}</p>
      </div>
    )
  }

  addSource(e) {
    e.preventDefault();
    this.props.addSource(this.state.newSource);
    this.setState({newSource: ""});
  }

  updateNewSource(e) {
    this.setState({
      newSource: e.target.value
    })
  }
}

function mapProps(state) {
  const sourceState = state.sources;
  console.log(state);
  return {
    sources: sourceState.sourcesList,
    error: sourceState.error,
    loading: sourceState.loading,
    items: state.items.items
  }
}

function mapDispatch(dispatch) {
  return {
    addSource: (source) => {
      dispatch(addSource(source));
    },
    deleteItem: (idx) => {
      dispatch(deleteSource(idx));
    }
  }
}

export default connect(mapProps, mapDispatch)(Sources);
