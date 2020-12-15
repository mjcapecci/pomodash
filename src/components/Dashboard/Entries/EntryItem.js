import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const EntryItem = ({ data }) => {
  return <ListGroup>{data.project}</ListGroup>;
};

export default EntryItem;
