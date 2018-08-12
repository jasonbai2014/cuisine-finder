import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import Grid from '@material-ui/core/Grid';
import DetailsList from '../DetailsList/detailsList';
import LocationDetail from '../LocationDetail/locationDetail';
import Map from '../../core/Map/map';

const LocationDetails = ({ classes, match }) => (
  <Grid container className={classes.dimension}>
    <Grid item md={2} className={classes.detailsList}>
      {
        match.params.locationId ? <LocationDetail locationId={match.params.locationId} />
          : <DetailsList />
      }
    </Grid>
    <Grid item md={10}>
      <Map id="restaurants-map" />
    </Grid>
  </Grid>
)

LocationDetails.propTypes = {
  classes: PropTypes.shape({
    dimension: PropTypes.string,
    detailsList: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({}),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

const styles = {
  dimension: {
    height: '100%',
  },
  detailsList: {
    height: '100%',
    overflowY: 'auto',
    borderRight: '2px solid #CCCCCC',
  },
};

const styledComponent = withStyles(styles)(LocationDetails);
export default withRouter(connect()(styledComponent));
