import React from 'react';

import SubgroupComponent from './subgroupComponent';

class MenuComponent extends React.Component {
  constructor(props) {
    super(props);
    const firstMenuName = Object.keys(props.menus)[0];
    const firstMenu = props.menus[firstMenuName];
    this.state = {
      currentMenu: firstMenu,
      currentMenuName: firstMenuName,
      buttonName: 'Show Full Menu',
      hidden: true,
    };
  }
  handleClick(menuName) {
    const keyArray = Object.keys(this.props.menus);
    for (let i = 0; i < keyArray.length; i++) {
      if (keyArray[i] === menuName) {
        this.setState({
          currentMenu: this.props.menus[keyArray[i]],
          currentMenuName: keyArray[i],
        });
      }
    }
  }
  collapseMenu() {
    if(this.state.hidden) {
      this.setState({
        hidden: false,
        buttonName: 'Collapse Menu',
      });
    } else {
      this.setState({
        hidden: true,
        buttonName: 'Show Full Menu',
      });
      document.getElementById('title').scrollIntoView({ block: 'end', behavior: 'smooth' });      
    }
  }
  render() {
    console.log(this.state);
    return (
      <div className="menuContainer">
      <div
      className={
        this.state.hidden ? 'hidden' : 'active'
      }>
        <div className= "buttons">
          {Object.keys(this.props.menus).map(menuName =>
          <button key={menuName} className= "menuButton" onClick={() => { this.handleClick(menuName); }}>{menuName}</button>)}
        </div>
        {Object.keys(this.state.currentMenu).map(subgroupName =>
          <SubgroupComponent name={subgroupName} subgroup={this.state.currentMenu[subgroupName]} />)}
      </div>
      <div 
      className={
        this.state.hidden ? 'gradient' : ''
      }></div>                     
        <button onClick={this.collapseMenu.bind(this)} className="collapseButton">{this.state.buttonName}</button>
      </div>
    );
  }
}

export default MenuComponent;
