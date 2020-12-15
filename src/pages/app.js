import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/Layout';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import PrivateRoute from '../components/PrivateRoute';
import Status from '../components/Status';

const App = () => (
  <Layout>
    <Status />
    <Router>
      <PrivateRoute path='/app/dashboard' component={Dashboard} />
      <Login path='/app/login' />
    </Router>
  </Layout>
);

export default App;
