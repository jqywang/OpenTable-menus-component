import React from 'react';
import EntryComponent from './entryComponent.jsx';

const SubgroupComponent = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      {
        props.entries.map((entry) => {
          <EntryComponent entry = {entry}/>
        })
      }
    </div>
  );
};

export default SubgroupComponent;
