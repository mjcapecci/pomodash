import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const ProjectItem = ({ data, setCurrentProject, dispatch }) => {
  return (
    <ListGroup.Item onClick={() => dispatch(setCurrentProject(data))}>
      {data}
    </ListGroup.Item>
  );
};

export default ProjectItem;
