import React from 'react';
import Sources from './containers/Sources.jsx';

/*
  Main app wrapper, simple display component which renders the 3 sections of the rss reader:
    1) The list of news sources to poll
    2) The list of items which have been fetched from the sources
    3) The item being viewed at that time (the full article)
*/
const App = () => (
  //<NewsItems />
  <Sources />
  //<CurrentItem />
);

export default App;
