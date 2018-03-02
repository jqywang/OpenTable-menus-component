import React from 'react';
import EntryComponent from './entryComponent';

const SubgroupComponent = ({name, subgroup}) => {
    return (
    <div>
      <h3>{name}</h3>
      <h4>{subgroup.subgroup_desc}</h4>
      {
        subgroup.entries.map((entry) => {
          return (<EntryComponent entry = {entry}/>)
        })
      }
    </div>
    );
};

export default SubgroupComponent;
