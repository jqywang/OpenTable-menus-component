import React from 'react';

const EntryComponent = ({entry}) => {
  let extrasComponent = <div></div>
  if(entry.extras.name) {
    extrasComponent = <div className="extras">
      <div className="extrasName">{entry.extras.name}</div>
      <div className="extrasPrice">{entry.extras.price}</div>
    </div>
  }
  return (
  <span className='entryContainer'>
    <div className='entryInfo'>
      <div className="name">{entry.name}</div>
      <div className="price">{entry.price}</div>
    </div>
    <div className='clarity'> </div>
    <p className='entryDesc'> {entry.desc} </p>
    {extrasComponent}
  </span>
  );
};

export default EntryComponent;
