import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const LocationDetails = ({ restaurants, classes }) => (
  <Grid container className={classes.dimension}>
    <Grid item md={2} className={classes.detailsList}>
      <List disablePadding>
        {
          restaurants.map(restaurant => (
            <ListItem key={restaurant.name} className={classes.listItem} divider>
              <ListItemText
                className={classes.listItemText}
                secondary={restaurant.name}
                secondaryTypographyProps={{
                  className: classes.listItemTextTitle,
                }}
              />
              <ListItemText className={classes.listItemText} secondary={restaurant.cuisines} />
              <ListItemText className={classes.listItemText} secondary={restaurant.address} />
            </ListItem>
          ))
        }
      </List>
    </Grid>
    <Grid item md={10}>

    </Grid>
  </Grid>
);

LocationDetails.propTypes = {
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
  classes: PropTypes.shape({
    dimension: PropTypes.string,
    detailsList: PropTypes.string,
    listItem: PropTypes.string,
    listItemText: PropTypes.string,
    listItemTextTitle: PropTypes.string,
  }).isRequired,
};

const styles = {
  dimension: {
    height: '100%',
  },
  detailsList: {
    height: '100%',
    overflowY: 'auto',
  },
  listItem: {
    flexDirection: 'column',
  },
  listItemText: {
    width: '100%',
    textAlign: 'left',
    padding: '0',
  },
  listItemTextTitle: {
    fontWeight: 'bold',
  },
};

const mapStateToProps = state => ({ restaurants: state.Restaurants });

const styledComponent = withStyles(styles)(LocationDetails);
export default withRouter(connect(mapStateToProps)(styledComponent));
