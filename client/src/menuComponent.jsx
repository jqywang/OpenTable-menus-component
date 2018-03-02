import React from 'react';

import SubgroupComponent from './subgroupComponent';

class MenuComponent extends React.Component {
  constructor(props) {
    super(props);
    let firstMenuName = Object.keys(props.menus)[0];
    let firstMenu = props.menus[firstMenuName];
    this.state = {
      currentMenu: firstMenu,
      currentMenuName: firstMenuName,
    };
  }
  handleClick(menuName) {
    let keyArray = Object.keys(this.props.menus);
    for (let i = 0; i < keyArray.length; i++) {
      if (keyArray[i] === menuName) {
        this.setState({
          currentMenu: this.props.menus[keyArray[i]],
          currentMenuName: keyArray[i],
        })
      }
    }
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <div className = 'buttons'>
        {Object.keys(this.props.menus).map((menuName) =>
          <button key={menuName} onClick={() => {this.handleClick(menuName)}}>{menuName}</button>
        )}
        </div>
        <h2>{this.state.currentMenuName}</h2>
        {Object.keys(this.state.currentMenu).map((subgroupName) => 
          <SubgroupComponent name={subgroupName} subgroup={this.state.currentMenu[subgroupName]} />
        )}
      </div>
    )
  }
}

export default MenuComponent;
