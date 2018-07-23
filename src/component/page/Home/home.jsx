import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import LocationSearchBox from '../../core/LocationSearchBox/locationSearchBox';

const Home = ({ classes }) => (
  <Grid container direction="column" className={classes.dimension}>
    <Grid item>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Cuisine Finder
          </Typography>
          <Button color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Grid>
    <Grid item className={classes.flex}>
      <Grid item xs={12} sm={10} md={8} className={classes.searchBoxContainer}>
        <LocationSearchBox />
      </Grid>
    </Grid>
  </Grid>
);

Home.propTypes = {
  classes: PropTypes.shape({
    flex: PropTypes.string,
    dimension: PropTypes.string,
    searchBoxContainer: PropTypes.string,
  }).isRequired,
};

const styles = {
  flex: {
    flexGrow: 1,
  },
  dimension: {
    height: '100%',
  },
  searchBoxContainer: {
    marginTop: '160px',
    margin: '0 auto',
  },
};

export default withStyles(styles)(Home);
