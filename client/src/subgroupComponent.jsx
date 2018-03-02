import React from 'react';
import EntryComponent from './entryComponent';

const SubgroupComponent = ({name, subgroup}) => {
    return (
    <div className='subgroup'>
      <h3>{name}</h3>
      <h4>{subgroup.subgroup_desc}</h4>
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
