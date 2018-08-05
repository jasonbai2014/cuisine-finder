import React from 'react';
import { Route, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const NotFound = ({ classes }) => (
  <Grid className={classes.dimension}>
    <div>
      The page you are looking for does not exist.
    </div>
    <div>
      <Route>
        <Link to="/">
          Go back to home
        </Link>
      </Route>
    </div>
  </Grid>
);

NotFound.propTypes = {
  classes: PropTypes.shape({
    dimension: PropTypes.string,
  }).isRequired,
}

const styles = {
  dimension: {
    height: '100%',
    padding: '20px',
  },
}

export default withStyles(styles)(NotFound);
