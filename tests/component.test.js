import React from 'react';

import MenuApp from '../client/src/index';

import MenuComponent from '../client/src/menuComponent';

import EntryComponent from '../client/src/entryComponent';

import SubgroupComponent from '../client/src/subgroupComponent';

describe('menu component', () => {
  const fake = {
    Dinner: 'yes',
    Lunch: 'also yes'
  };
  const wrapper = global.shallow(<MenuComponent menus={fake}/>);
  it('should have correct number of buttons', () => {
    expect(wrapper.is('div')).toEqual(true);
    expect(wrapper.find('button').length).toBe(2);
  });
  it('should change state if button is pressed', () => {
    const dinnerButton = wrapper.find('button').at(0);
    const lunchButton = wrapper.find('button').at(1);
    dinnerButton.simulate('click');
    expect(wrapper.state().currentMenuName).toBe('Dinner');
    lunchButton.simulate('click');
    expect(wrapper.state().currentMenuName).toBe('Lunch');
  });
  it('should pass props onto subgroup component', () => {
    expect(wrapper.find(SubgroupComponent).props).toBe('yes');
  });
});

describe('MenuApp component', () => {
  const wrapper = global.shallow(<MenuApp restaurant = '2'/>);
  it('should pass appropriate things into MenuComponent', () => {
    let propsThing = wrapper.find(MenuComponent).props;
    expect(wrapper.type()).toBe('div');
  });
});
