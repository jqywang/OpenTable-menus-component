import MenuComponent from '../client/src/menuComponent.jsx';

import EntryComponent from '../client/src/entryComponent.jsx';

import SubgroupComponent from '../client/src/subgroupComponent.jsx';

import React from 'react';

describe('menu should show correct things', () => {
  const fake = {
    Dinner: 'yes',
    Lunch: 'also yes'
  };
  const wrapper = global.shallow(<MenuComponent menus = {fake}/>);
  expect(wrapper.is('div')).toEqual(true);
  expect(wrapper.find('button')).to.have.length(2);
});