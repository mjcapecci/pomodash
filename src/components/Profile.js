import React from 'react';
import View from './View';
import TimerCard from './TopProfile/Timer/TimerCard';
import ProjectsCard from './TopProfile/Projects/ProjectsCard';
import EntryLog from './BottomProfile/Log/EntryLog';

const Profile = () => {
  return (
    <View title='Your Profile'>
      <section className='top-profile-container'>
        <TimerCard />
        <ProjectsCard />
      </section>
      <section className='bottom-profile-container'>
        <EntryLog />
      </section>
    </View>
  );
};

export default Profile;
