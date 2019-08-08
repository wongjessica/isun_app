import React from 'react';

import Button from '@material-ui/core/Button';
import { MemoryRouter as Router } from 'react-router';
import { fade, makeStyles } from '@material-ui/core/styles';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <Button size="small" onClick={firebase.doSignOut} style={{ textDecoration: 'none', color: 'white' }}>
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);