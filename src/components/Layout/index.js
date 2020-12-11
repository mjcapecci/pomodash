import React from 'react';
import { Helmet } from 'react-helmet';
import '../../styles/main.scss';

import { Provider } from 'react-redux';
import store from '../../store';

import Header from '../Header';

const Layout = ({ children }) => (
  <Provider store={store}>
    <div>
      <Helmet title='Pomo Points' />
      <Header />
      <main>{children}</main>
    </div>
  </Provider>
);

export default Layout;
