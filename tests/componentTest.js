import MenuComponent from '../client/src/menuComponent.jsx';

import EntryComponent from '../client/src/entryComponent.jsx';

import SubgroupComponent from '../client/src/subgroupComponent.jsx';

import React from 'react';

const fake = {
  Dinner: 'yes',
  Lunch: 'also yes'
};
const wrapper = global.shallow(<MenuComponent menus = {fake}/>);
describe('menu should show correct things', () => {
  expect(wrapper.is('div')).toEqual(true);
  expect(wrapper.find('button')).to.have.length(2);
});

describe('menu buttons should change state', () => {
  it('should change state if button is pressed' () => {
    const dinnerButton = wrapper.find('button').at(0);
    const lunchButton = wrapper.find('button').at(1);
    dinnerButton.simulate('click');
    expect(wrapper.state().currentMenuName).toBe('Dinner');
  });
});