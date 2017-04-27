import React from 'react';
import ItemGroup from '../ItemGroup.jsx';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import sinon from 'sinon';

const item = (
  <ItemGroup
    title="title"
    desc="desc"
    link="http://google.com"
    items={[]}
    selected={false}
    selectItemGroup={() => {}}
    selectSubItem={() => {}}
    selectedNewsItem="test"
  />
);

it('renders with the correct props', () => {
  const tree = renderer.create(item).toJSON();
  expect(tree).toMatchSnapshot();
});

it('has a selected class if selected is true', () => {
  const wrapper = shallow(
    <ItemGroup
      title="title"
      desc="desc"
      link="http://google.com"
      items={[]}
      selected={true}
      selectItemGroup={() => {}}
      selectSubItem={() => {}}
      selectedNewsItem="test"
    />
  );
  expect(wrapper.find('.item-group-head').hasClass('selected')).toEqual(true);
});

it('renders a view link with the title and link attached', () => {
  const wrapper = shallow(item);
  expect(wrapper.find('a').prop('href')).toEqual("http://google.com");
  expect(wrapper.find('a').text()).toEqual("title");
});

it('renders sub items if any items are pased in', () => {
  const wrapper = shallow(
    <ItemGroup
      title="title"
      desc="desc"
      link="http://google.com"
      items={[{
        title: "test",
        guid: "abcd",
        description: "desc",
      }]}
      selected={true}
      selectItemGroup={() => {}}
      selectSubItem={() => {}}
      selectedNewsItem="test"
    />
  );
  expect(wrapper.find('.item-sub-items')).toBeTruthy();
  expect(wrapper.find('.item-sub-items').children()).toHaveLength(1);
});
