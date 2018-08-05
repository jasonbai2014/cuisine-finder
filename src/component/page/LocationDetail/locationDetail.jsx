import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const LocationDetail = ({ classes, restaurants, locationId }) => {
  let restaurant = null;
  if (!isNaN(locationId) && restaurants.length > Number.parseInt(locationId, 10)) {
    restaurant = restaurants[Number.parseInt(locationId, 10)];
  }
  return (
    <Grid direction="column" container className={classes.dimension}>
      { restaurant ? (
        <Fragment>
          <div className={[classes.detailItem, classes.detailTitle].join(' ')}>
            {restaurant.name}
          </div>
          <div className={classes.detailItem}>
            {restaurant.cuisines}
          </div>
          <div className={classes.detailItem}>
            {restaurant.address}
          </div>
          <div className={classes.detailItem}>
            <a className={classes.detailLink} href={restaurant.photos_url} target="_blank" rel="noopener noreferrer">
              Photos
            </a>
          </div>
          <div className={classes.detailItem}>
            <a className={classes.detailLink} href={restaurant.menu_url} target="_blank" rel="noopener noreferrer">
              Menus
            </a>
          </div>
          <div className={classes.detailItem}>
            <span>
              {`Rating: ${restaurant.rating}`}
            </span>
            <span>
              {`${restaurant.votes} Votes`}
            </span>
          </div>
        </Fragment>
      ) : (
        <div className={classes.detailItem}>
          The restaurant does not exist.
        </div>
      )
    }
    </Grid>
  );
};

LocationDetail.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    address: PropTypes.string,
    cuisines: PropTypes.string,
    lat: PropTypes.string,
    lon: PropTypes.string,
    menu_url: PropTypes.string,
    name: PropTypes.string,
    photos_url: PropTypes.string,
    rating: PropTypes.string,
    votes: PropTypes.string,
  })).isRequired,
  locationId: PropTypes.string.isRequired,
  classes: PropTypes.shape({
    dimension: PropTypes.string,
    detailItem: PropTypes.string,
    detailTitle: PropTypes.string,
    detailLink: PropTypes.string,
  }).isRequired,
};

const styles = {
  dimension: {
    height: '100%',
  },
  detailItem: {
    margin: '5px 10px',
  },
  detailTitle: {
    fontWeight: 'bold',
    fontSize: '1.5em',
  },
  detailLink: {
    textDecoration: 'none',
    color: '#000000',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
};

const mapStateToProps = state => ({ restaurants: state.Restaurants });

const styledComponent = withStyles(styles)(LocationDetail);
export default connect(mapStateToProps)(styledComponent);
