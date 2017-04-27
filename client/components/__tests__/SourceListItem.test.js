import React from 'react';
import ReactDOM from 'react-dom';
import SourceListItem from '../SourceListItem.jsx';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import sinon from 'sinon';

const item = <SourceListItem source="test" deleteItem={() => {}}/>;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(item, div);
});

it('renders with the correct props', () => {
  const tree = renderer.create(item).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should call the provided function when delete is clicked', () => {
  const onDeleteClick = sinon.spy();
  const wrapper = shallow(
    <SourceListItem source="text" deleteItem={onDeleteClick} />
  );
  wrapper.find('button').simulate('click');
  expect(onDeleteClick.calledOnce).toEqual(true);
});
