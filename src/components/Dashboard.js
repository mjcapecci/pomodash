import React from 'react';
import View from './View';
import TimerContainer from './Dashboard/Timer/TimerContainer';
import ProjectsContainer from './Dashboard/Projects/ProjectsContainer';
import EntryContainer from './Dashboard/Entries/EntryContainer';

const Dashboard = () => {
  return (
    <View title='Dashboard'>
      <section className='top-dashboard-container'>
        <TimerContainer />
        <ProjectsContainer />
      </section>
      <section className='bottom-dashboard-container'>
        <EntryContainer />
      </section>
    </View>
  );
};

export default Dashboard;
