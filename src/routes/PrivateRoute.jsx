import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { PrivateLayout } from '../layouts';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const storedToken = localStorage.getItem('token');
  if (storedToken) {
    return (
      <>
        <Route
          {...rest}
          render={matchProps => (
            <PrivateLayout>
              <Component {...matchProps} />
            </PrivateLayout>
          )
          }
        />
      </>
    );
  }
  return (
    <Route
      {...rest}
      render={matchProps => (
        <PrivateLayout>
          <Component {...matchProps} />
        </PrivateLayout>
      )
      }
    />
  );
};
PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
};
export default PrivateRoute;
