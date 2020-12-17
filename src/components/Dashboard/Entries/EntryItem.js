import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import moment from 'moment';

const EntryItem = ({ data }) => {
  return (
    <ListGroup.Item className='entry-row'>
      <div className='entry-row-item entry-row-item-time'>
        <div className='time-div time-div-date'>
          {moment(data.startTime).format('MM/D/YY')}
        </div>
        <div className='time-div time-div-time'>
          {moment(data.startTime).format('h:mma')}
        </div>
      </div>
      <div className='entry-row-item'>{data.project || 'No Project'}</div>
      <div className='entry-row-item'>{data.status}</div>
    </ListGroup.Item>
  );
};

export default EntryItem;
