import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import EntryComponent from './entryComponent.jsx';
import MenuComponent from './menuComponent.jsx';

const fakeData = {
    Dinner: 'something',
    Lunch: 'something else',
    Breakfast: "something again entirely",
    Something: 'dinner hehe'
};

class TestApp extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='entryComponent' >
                <MenuComponent menus = {fakeData} />
            </div>
        );
    }
}
export default ReactDOM.render(<TestApp />, document.getElementById('app'));
