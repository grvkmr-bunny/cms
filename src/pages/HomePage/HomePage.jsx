import React from 'react';
import { Typography } from '@material-ui/core';
// import { Login } from '../Login';
import { SliderDemo } from '../SliderDemo';

const HomePage = () => (
  <>
    <Typography variant="h1" align="center">
      <SliderDemo />
      {/* <Login /> */}
    </Typography>
    {/* <Typography variant="display1" align="center">
      <h6>Seems like the page you are looking after does not exist</h6>
    </Typography> */}
  </>
);
export default HomePage;
