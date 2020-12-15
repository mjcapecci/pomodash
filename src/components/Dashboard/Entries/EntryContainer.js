import React from 'react';
import firebase from 'gatsby-plugin-firebase';
import { useCollectionOnce } from 'react-firebase-hooks/firestore';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import EntryItem from './EntryItem';

const EntryLog = () => {
  const uid = JSON.parse(localStorage.getItem('user')).uid;
  const [value, loading, error] = useCollectionOnce(
    firebase.firestore().collection('Entries').where('user', '==', uid),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <Card>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {value && (
        <>
          <h4>Your Entries: </h4>
          <ListGroup variant='flush'>
            {value.docs.map((doc) => (
              <EntryItem key={doc.id} data={doc.data()} />
            ))}
          </ListGroup>
        </>
      )}
    </Card>
  );
};

export default EntryLog;
