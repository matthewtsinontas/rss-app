import React from 'react';
import SubItem from '../SubItem.jsx';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import sinon from 'sinon';

const item = (
  <SubItem
    title="test"
    description="description"
    selectSubItem={() => {}}
    guid="abcd"
    selected={false}
  />
);

it('renders with the correct props', () => {
  const tree = renderer.create(item).toJSON();
  expect(tree).toMatchSnapshot();
});

it('has a selected class if selected is true', () => {
  const wrapper = shallow(
    <SubItem
      title="test"
      description="description"
      selectSubItem={() => {}}
      guid="abcd"
      selected={true}
    />
  );
  expect(wrapper.find('.sub-item').hasClass('selected')).toEqual(true);
});

it('renders a the title and description', () => {
  const wrapper = shallow(item);
  expect(wrapper.find('p').text()).toEqual("test");
  expect(wrapper.find('span').text()).toEqual("description");
});

it('renders sub items if any items are pased in', () => {
  const selectSubItem = sinon.spy();
  const wrapper = shallow(
    <SubItem
      title="test"
      description="description"
      selectSubItem={selectSubItem}
      guid="abcd"
      selected={true}
    />
  );
  wrapper.find('div').simulate('click');
  expect(selectSubItem.calledOnce).toEqual(true);
});
