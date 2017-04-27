import React from 'react';
import { connect } from 'react-redux';
import SourceListItem from '../components/SourceListItem.jsx';
import { addSource, deleteSource, fetchSources } from '../redux/actions/sources';
import AddSourceForm from '../components/AddSourceForm.jsx';

class Sources extends React.Component {

  constructor() {
    super();
    this.state = {
      newSource: ""
    };
    this.addSource = this.addSource.bind(this);
    this.updateNewSource = this.updateNewSource.bind(this);
    this.getNews = this.getNews.bind(this);
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
        <p>Sources List</p>
        <AddSourceForm
          loading={this.props.loading}
          newSource={this.state.newSource}
          updateNewSource={this.updateNewSource}
          addNewSource={this.addSource}
        />
        {this.props.error ? (
          <p>There was an error with that source, please try again...</p>
        ) : null}
        <p>Your Subscribed Feeds</p>
        <button disabled={!this.props.sources.length} onClick={this.getNews}>Refresh Feed(s)</button>
        {this.props.sources.map((source, i) => (
          <SourceListItem key={source} source={source} deleteItem={e => {this.props.deleteItem(i)}}/>
        ))}
      </div>
    )
  }

  addSource(e) {
    e.preventDefault();
    this.props.addSource(this.state.newSource);
    this.setState({newSource: ""});
  }

  updateNewSource(e) {
    this.setState({newSource: e.target.value});
  }

  getNews() {
    if (this.props.sources.length) {
      this.props.fetchSources(this.props.sources);
    }
  }
}

function mapProps(state) {
  const sourceState = state.sources;
  return {
    sources: sourceState.sourcesList,
    error: sourceState.error,
    loading: sourceState.loading
  }
}

function mapDispatch(dispatch) {
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

export default connect(mapProps, mapDispatch)(Sources);
