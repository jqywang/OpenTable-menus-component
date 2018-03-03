import React from 'react';
import EntryComponent from './entryComponent';

const SubgroupComponent = ({name, subgroup}) => {
    return (
    <div className='subgroup'>
      <h3>{name}</h3>
      <p>{subgroup.subgroup_desc}</p>
      <div className='allEntries'>
      {
        subgroup.entries.map((entry) => {
          return (<EntryComponent entry = {entry}/>)
        })
      }
      </div>
    </div>
    );
};

export default SubgroupComponent;
