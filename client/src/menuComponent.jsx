import React from 'react';

class MenuComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuArray: this.props.menus,
      currentMenu: this.props.menus[0];
    }
  }
  handleClick(menuName) {
    for(let i = 0; i < this.state.menuArray; i++) {
      for(let key in this.state.menus) {
        if(key === menuName) {
          this.setState()
        }
      }
    }
  }
}

export default MenuComponent;
