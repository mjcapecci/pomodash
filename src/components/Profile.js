import React from 'react';
import View from './View';
import { getUser } from '../utils/auth';
import Projects from './Stats/projects';

const Profile = () => {
  const user = getUser();
  const { displayName, email, emailVerified } = user;
  const accessToken = user.stsTokenManager.accessToken;

  return (
    <View title='Your Profile'>
      <Projects />
    </View>
  );
};

export default Profile;
