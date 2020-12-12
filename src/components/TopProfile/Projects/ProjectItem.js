import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const ProjectItem = ({ data }) => {
  return <ListGroup.Item>{data}</ListGroup.Item>;
};

export default ProjectItem;
