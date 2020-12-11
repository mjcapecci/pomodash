import React from 'react';
import { Link, navigate } from '@reach/router';
import { getUser, isLoggedIn, logout } from '../../utils/auth';
import firebase from 'gatsby-plugin-firebase';

export default () => {
  let details;
  if (isLoggedIn()) {
    const { displayName, email } = getUser();
    details = (
      <p>
        Logged in as {displayName} ({email}
        )!
        {` `}
        <a
          href='/'
          onClick={(e) => {
            e.preventDefault();
            logout(firebase).then(() => navigate(`/app/login`));
          }}
        >
          <u>Log out</u>
        </a>
      </p>
    );
  }

  return <div>{details}</div>;
};
