import React from 'react';
import PropTypes from 'prop-types';

const View = ({ title, children }) => (
  <div className='container'>
    <div></div>
    <div>
      <h1>{title}</h1>

      <div>{children}</div>
    </div>
  </div>
);

View.propTypes = {
  title: PropTypes.string.isRequired,
};

export default View;
