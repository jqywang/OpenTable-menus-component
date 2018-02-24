import React from 'react';

const EntryComponent = (props) => (
  <div className = 'entry'>
    <div className = 'name'>{props.name}</div>
    <div className = 'price'>{props.price}</div>
    <div className = 'extras'>
      <div className = 'extrasName'>{props.extras.name}</div>
      <div className = 'extrasPrice'>{props.extras.price}</div>
    </div>
  </div>
);

export default EntryComponent;
