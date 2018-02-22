import React from 'react';
import ReactDOM from 'react-dom';
class TestApp extends React {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <h3>Hey from Babel processed react thing</h3>
        );
    }
}
ReactDOM.render(<TestApp/>, document.findElementById('app'));