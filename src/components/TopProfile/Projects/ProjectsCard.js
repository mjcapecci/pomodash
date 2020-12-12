import React from 'react';
import firebase from 'gatsby-plugin-firebase';
import { useCollectionOnce } from 'react-firebase-hooks/firestore';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ProjectItem from './ProjectItem';

const ProjectsCard = () => {
  const uid = JSON.parse(localStorage.getItem('user')).uid;
  const [value, loading, error] = useCollectionOnce(
    firebase.firestore().collection('Projects').where('user', '==', uid),
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
          <h4>Your Projects </h4>
          <ListGroup variant='flush'>
            {value.docs.map((doc) => (
              <ProjectItem key={doc.id} data={doc.data().name} />
            ))}
          </ListGroup>
        </>
      )}
    </Card>
  );
};

export default ProjectsCard;
