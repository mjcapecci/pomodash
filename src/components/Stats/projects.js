import React, { Fragment } from 'react';
import firebase from 'gatsby-plugin-firebase';
import { useCollectionOnce } from 'react-firebase-hooks/firestore';

const Projects = () => {
  const uid = JSON.parse(localStorage.getItem('user')).uid;
  const [value, loading, error] = useCollectionOnce(
    firebase.firestore().collection('Projects').where('user', '==', uid),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return (
    <div>
      <p>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {value && (
          <span>
            Your Projects:{' '}
            {value.docs.map((doc) => (
              <Fragment key={doc.id}>{doc.data().name} </Fragment>
            ))}
          </span>
        )}
      </p>
    </div>
  );
};

export default Projects;
