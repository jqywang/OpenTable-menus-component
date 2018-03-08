import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import EntryComponent from './entryComponent';
import MenuComponent from './menuComponent';

const fakeData = {
  Dinner: 'something',
  Lunch: 'something else',
  Breakfast: 'something again entirely',
  Something: 'dinner hehe',
};

class MenuApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: false,
      name: '',
    };
  }
  componentDidMount() {
    console.log('component did mount');
    axios.get(`/api/menus/${this.props.restaurant}`)
      .then((res) => {
        console.log('getting it :)');
        const restaurantMenus = res.data;
        const restaurantName = Object.keys(restaurantMenus)[0];
        this.setState({
          menus: restaurantMenus,
        });
      });
  }
  render() {
    if (!this.state.menus) {
      return <h1>hold on</h1>;
    }
    return (
      <div className="entryComponent" >
      <h2 className="title">Menu</h2>
        <MenuComponent menus={this.state.menus} />
      </div>
    );
  }
}
//ReactDOM.render(<MenuApp restaurant="2" />, document.getElementById('app'));
window.MenuApp = MenuApp;
export default MenuApp;