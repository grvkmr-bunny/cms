import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LockOpen from '@material-ui/icons/LockOpen';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  leftIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const routes = [
  { path: '/news', label: 'NEWS' },
  { path: '/about', label: 'ABOUT' },
  // { path: '/textfielddemo', label: 'TEXTFIELD DEMO' },
  // { path: '/inputdemo', label: 'INPUT DEMO' },
  // { path: '/sliderdemo', label: 'SLIDER DEMO' },
  { path: '/login', label: 'LOGIN' },
];

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  linkButton = (name, path) => (
    <Link
      component={RouterLink}
      color="inherit"
      underline="none"
      to={path}
    >
      {
        (name === "LOGOUT")
        ? <Button color="inherit" onClick={this.handleSubmit}>
            <LockOpen className={this.props.classes.leftIcon} />
            {name}
          </Button>
        : <Button color="inherit">{name}</Button>
      }
    </Link>
  );

  handleSubmit = () => localStorage.clear();

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              College Management System
            </Typography>
            {
              routes.map(route => (this.linkButton(route.label, route.path)))
            }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.objectOf.isRequired,
};
export default withStyles(styles)(Navbar);
