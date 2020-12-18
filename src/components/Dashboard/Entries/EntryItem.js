import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import moment from 'moment';

const EntryItem = ({ data }) => {
  const getStatusResult = (status) => {
    if (status === 'active') return <span className='neutral-result'>+0</span>;
    else if (status === 'completed')
      return <span className='positive-result'>+10</span>;
    else return <span className='negative-result'>-10</span>;
  };

  return (
    <ListGroup.Item className='entry-row'>
      <div className='entry-row-item entry-row-item-time'>
        <div className='time-div time-div-date'>
          {moment(data.startTime).format('M/D')}
        </div>
        <div className='time-div time-div-time'>
          {moment(data.startTime).format('h:mma')}
        </div>
      </div>
      <div className='entry-row-item'>{data.project || 'No Project'}</div>
      <div className='entry-row-item'>{getStatusResult(data.status)}</div>
    </ListGroup.Item>
  );
};

export default EntryItem;
