import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from '../../components';

const PrivateLayout = ({ children }) => (
  <div>
    <Navbar />
    <div>{children}</div>
  </div>
);
PrivateLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default PrivateLayout;
