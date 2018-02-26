import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import EntryComponent from './entryComponent.jsx';

const fakeData = {
    name: 'food',
    price: '20 bux',
    desc: 'lots of tasty',
    extras: {
        name: 'more food',
        price: '10 bux',
    }
};

class TestApp extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='entryComponent' >
                <EntryComponent entry = {fakeData} />
            </div>
        );
    }
}
ReactDOM.render(<TestApp />, document.getElementById('app'));
