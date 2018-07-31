import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import LocationSearchBox from '../../core/LocationSearchBox/locationSearchBox';
import ErrorDialog from '../../core/ErrorDialog/errorDialog';
import NotFound from '../notFound/notFound';
import LocationDetails from '../locationDetails/locationDetails';

const Home = ({ classes, loading }) => (
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
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Grid item xs={12} sm={10} md={8} className={classes.searchBoxContainer}>
              <LocationSearchBox />
            </Grid>
          )}
        />
        <Route path="/location-details" component={LocationDetails} />
        <Route component={NotFound} />
      </Switch>
    </Grid>
    <ErrorDialog />
    {
      loading.size === 0 ? null
        : (
          <div className={classes.loadingIconContainer}>
            <div className={classes.loadingIcon}>
              <CircularProgress />
            </div>
          </div>
        )
    }
  </Grid>
);

Home.propTypes = {
  classes: PropTypes.shape({
    flex: PropTypes.string,
    dimension: PropTypes.string,
    searchBoxContainer: PropTypes.string,
    loadingIconContainer: PropTypes.string,
    loadingIcon: PropTypes.string,
  }).isRequired,
  loading: PropTypes.isPrototypeOf(Set).isRequired,
};

const mapStateToProps = state => ({ loading: state.Loading });

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
  loadingIconContainer: {
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    zIndex: '999',
    backgroundColor: 'rgba(204,204,204,0.5)',
  },
  loadingIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%)',
  },
};

const styledComponent = withStyles(styles)(Home);
export default connect(mapStateToProps, () => ({}))(styledComponent);
