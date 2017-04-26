import React from 'react';
import AddSourceForm from '../AddSourceForm.jsx';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import sinon from 'sinon';

it('renders with the correct props', () => {
  const item = (
    <AddSourceForm
      newSource="newSource"
      loading={false}
      updateNewSource={() => {}}
      addNewSource={() => {}}
    />
  );
  const tree = renderer.create(item).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should call the provided function when the form is submitted', () => {
  const onFormSubmit = sinon.spy();
  const wrapper = shallow(
    <AddSourceForm
      newSource="newSource"
      loading={false}
      updateNewSource={() => {}}
      addNewSource={onFormSubmit}
    />
  );
  wrapper.find('form').simulate('submit');
  expect(onFormSubmit.calledOnce).toEqual(true);
});

it('should disable the form inputs and display the correct text if loading', () => {
  const wrapper = shallow(
    <AddSourceForm
      newSource="newSource"
      loading={true}
      updateNewSource={() => {}}
      addNewSource={() => {}}
    />
  );
  expect(wrapper.find('button').text()).toEqual("Loading ...");
  expect(wrapper.find('input').html().includes('disabled=""')).toBeTruthy();
  expect(wrapper.find('button').html().includes('disabled=""')).toBeTruthy();

});
