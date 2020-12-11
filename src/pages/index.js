import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import View from '../components/View';
import Status from '../components/Status';

const Index = () => (
  <Layout>
    <Status />
    <View title='Firebase Authentication Starter'>
      <p>
        👋 This is a simple demo of creating dynamic pages with Gatsby that
        require <b>user authentication</b> and using <b>Firebase</b> as
        authentication provider.
      </p>
      <br />
      <p>
        📚 It uses concepts from the
        {` `}
        <a href='https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/'>
          client-only routes section
        </a>
        {` `} and {` `}
        <a href='https://www.gatsbyjs.org/tutorial/authentication-tutorial'>
          making a site with user authentication
        </a>
        {` `}
        tutorial in the official gatsby doc.
      </p>
      <br />
      <p>
        This is the public home, and here it is a private route to start:
        <br />
        <button>
          <Link to='/app/profile'>Go to your profile</Link>
        </button>
      </p>
    </View>
  </Layout>
);

export default Index;
