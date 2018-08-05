import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const DetailsList = ({ restaurants, classes, match }) => (
  <List disablePadding>
    {
      restaurants.map((restaurant, idx) => (
        <Link to={`${match.url}/${idx}`} key={restaurant.lat + restaurant.lon} className={classes.itemLink}>
          <ListItem className={classes.listItem} divider>
            <ListItemText
              className={classes.listItemText}
              secondary={restaurant.name}
              secondaryTypographyProps={{
                className: classes.listItemTextTitle,
              }}
            />
            <ListItemText
              className={classes.listItemText}
              secondary={restaurant.cuisines}
            />
            <ListItemText
              className={classes.listItemText}
              secondary={restaurant.address}
            />
          </ListItem>
        </Link>
      ))
    }
  </List>
);

DetailsList.propTypes = {
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
    itemLink: PropTypes.string,
    listItem: PropTypes.string,
    listItemText: PropTypes.string,
    listItemTextTitle: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({}),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

const styles = {
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
  itemLink: {
    textDecoration: 'none',
  },
};

const mapStateToProps = state => ({ restaurants: state.Restaurants });

const styledComponent = withStyles(styles)(DetailsList);
export default withRouter(connect(mapStateToProps)(styledComponent));
