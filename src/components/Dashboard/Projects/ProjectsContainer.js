import React from 'react';
import firebase from 'gatsby-plugin-firebase';
import { getUser } from '../../../utils/auth';
import { useCollectionOnce } from 'react-firebase-hooks/firestore';
import { useDispatch } from 'react-redux';
import { setCurrentProject } from '../../../actions/app';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ProjectItem from './ProjectItem';

const ProjectsCard = () => {
  const dispatch = useDispatch();
  const [value, loading, error] = useCollectionOnce(
    firebase
      .firestore()
      .collection('Projects')
      .where('user', '==', getUser().uid),
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
              <ProjectItem
                key={doc.id}
                data={doc.data().name}
                setCurrentProject={setCurrentProject}
                dispatch={dispatch}
              />
            ))}
          </ListGroup>
        </>
      )}
    </Card>
  );
};

export default ProjectsCard;
