import React from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../../utils/auth';
import Card from 'react-bootstrap/Card';
import TimerControls from './TimerControls';
import firebase from 'gatsby-plugin-firebase';

const TimerCard = () => {
  const currentProject = useSelector((state) => state.app.currentProject);

  const newEntry = () => {
    const db = firebase.firestore();
    db.collection('Entries').add({
      project: currentProject,
      startTime: Date.now(),
      status: 'active',
      user: getUser().uid,
    });
  };

  const failEntry = () => {
    const db = firebase.firestore();
    const data = db
      .collection('Entries')
      .where('user', '==', getUser().uid)
      .where('status', '==', 'active');
    data
      .get()
      .then((snapshots) => {
        snapshots.forEach((doc) => {
          const docRef = firebase.firestore().collection('Entries').doc(doc.id);
          docRef.update({ status: 'failed' });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Card>
      <Card.Title>
        {currentProject ? (
          <h3>{currentProject}</h3>
        ) : (
          <p>Please select a project</p>
        )}
      </Card.Title>
      <TimerControls newEntry={newEntry} failEntry={failEntry} />
    </Card>
  );
};

export default TimerCard;
