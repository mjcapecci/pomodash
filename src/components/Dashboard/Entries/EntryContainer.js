import React, { useEffect, useState } from 'react';
import firebase from 'gatsby-plugin-firebase';
import { useCollectionOnce } from 'react-firebase-hooks/firestore';
import { getUser } from '../../../utils/auth';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import EntryItem from './EntryItem';

const EntryLog = () => {
  const [sortedData, setSortedData] = useState(null);
  const [value, loading, error] = useCollectionOnce(
    firebase
      .firestore()
      .collection('Entries')
      .where('user', '==', getUser().uid)
      .orderBy('startTime', 'desc'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  useEffect(() => {
    if (!value) return;
    setSortedData(
      value.docs.sort((a, b) =>
        a.data().startTime > b.data().startTime ? -1 : 1
      )
    );
  }, [value]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return (
    <Card>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {sortedData && (
        <>
          <h4>Your Entries: </h4>
          <ListGroup variant='flush'>
            <ListGroup.Item className='entry-row'>
              <div className='entry-row-item entry-row-item-time'>Date</div>
              <div className='entry-row-item'>Project</div>
              <div className='entry-row-item'>Result</div>
            </ListGroup.Item>
            {sortedData.map((doc) => (
              <EntryItem key={doc.id} data={doc.data()} />
            ))}
          </ListGroup>
        </>
      )}
    </Card>
  );
};

export default EntryLog;
