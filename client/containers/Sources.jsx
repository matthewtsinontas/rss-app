import React from 'react';
import { connect } from 'react-redux';
import SourceListItem from '../components/SourceListItem.jsx';
import { addSource, deleteSource, fetchSources } from '../redux/actions/sources';
import AddSourceForm from '../components/AddSourceForm.jsx';

/**
  Container component to display the form to adding sources and a list of the sources
    you have subsribed too with some simple error and loading props

  Attaches a 5 minute interval function to auto refresh the feeds every 5 minutes
    but only if there are actually sources to load
*/
class Sources extends React.Component {

  state = {
    newSource: ""
  }

  componentDidMount() {
    //Dispatch call to get news sources every 5 minutes...
    setInterval(() => {this.getNews()}, 1000 * 60 * 5);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="sources">
        <h3>Sources List</h3>
        <AddSourceForm
          loading={this.props.loading}
          newSource={this.state.newSource}
          updateNewSource={this.updateNewSource}
          addNewSource={this.addSource}
        />
        {this.props.error ? (
          <p>There was an error with that source, please try again...</p>
        ) : null}
        <h5>Your Subscribed Feeds</h5>
        {this.props.sources.map((source, i) => (
          <SourceListItem key={source} source={source} deleteItem={e => {this.props.deleteItem(i)}}/>
        ))}
        <button className="refresh-button btn btn-info" disabled={!this.props.sources.length} onClick={this.getNews}>
          {this.props.loading ? "Loading ..." : "Refresh Feed(s)"}
        </button>
      </div>
    )
  }

  // Dispatches a call to fetch the new source and resets the newSource in state
  // back to an empty string
  addSource = (e) => {
    e.preventDefault();
    this.props.addSource(this.state.newSource);
    this.setState({newSource: ""});
  }

  // Updates the newSource slice of state with the value from the input
  updateNewSource = (e) => {
    this.setState({newSource: e.target.value});
  }

  // Dispatches a action to fetch auto refresh (or manual if the button is pressed)
  // the feed list only if there are sources available
  getNews = () => {
    if (this.props.sources.length) {
      this.props.fetchSources(this.props.sources);
    }
  }
}

function mapStateToProps(state) {
  const sourceState = state.sources;
  return {
    sources: sourceState.sourcesList,
    error: sourceState.error,
    loading: sourceState.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addSource: (sourceObj) => {
      dispatch(addSource(sourceObj));
    },
    deleteItem: (idx) => {
      dispatch(deleteSource(idx));
    },
    fetchSources: (sources = []) => {
      dispatch(fetchSources(sources));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sources);
