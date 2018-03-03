import React from 'react';

const EntryComponent = ({entry}) => {
  return (
  <span className='entryContainer'>
    <div className='entryInfo'>
      <div className="name">{entry.name}</div>
      <div className="price">{entry.price}</div>
    </div>
    <div className='clarity'> </div>
    <p className='entryDesc'> {entry.desc} </p>
    <div className="extras">
      <div className="extrasName">{entry.extras.name}</div>
      <div className="extrasPrice">{entry.extras.price}</div>
    </div>
  </span>
  );
};

export default EntryComponent;
