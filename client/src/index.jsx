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
    axios.get(`http://localhost:3000/api/menus/${this.props.restaurant}`)
      .then((res) => {
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
        <MenuComponent menus={this.state.menus} />
      </div>
    );
  }
}
export default ReactDOM.render(<MenuApp restaurant="1" />, document.getElementById('app'));
