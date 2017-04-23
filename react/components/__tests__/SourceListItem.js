import React from 'react';
import ReactDOM from 'react-dom';
import SourceListItem from '../SourceListItem.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SourceListItem source="test" deleteItem={() => {}}/>, div);
});
