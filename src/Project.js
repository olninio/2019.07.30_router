import React from 'react';

const Project = (props) => (
  <div>
    {props.match.params.projectName}
  </div>
  
)

export default Project;
