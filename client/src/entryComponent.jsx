import React from 'react';

const EntryComponent = ({entry}) => {
  return (
  <div className ="entry">
    <div className="name">{entry.name}</div>
    <div className="price">{entry.price}</div>
    <div className="extras">
      <div className="extrasName">{entry.extras.name}</div>
      <div className="extrasPrice">{entry.extras.price}</div>
    </div>
  </div>
  );
};

export default EntryComponent;
