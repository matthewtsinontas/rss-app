import React from 'react';
import ReactDOM from 'react-dom';
import SourceListItem from '../SourceListItem.jsx';
import renderer from 'react-test-renderer';

const item = <SourceListItem source="test" deleteItem={() => {}}/>;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(item, div);
});

it('renders with the correct props', () => {
  const tree = renderer.create(item).toJSON();
  expect(tree).toMatchSnapshot();
});
