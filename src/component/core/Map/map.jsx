import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

class Map extends React.Component {
  componentDidUpdate() {
    const { restaurants } = this.props;
  }

  render() {
    const { id, classes } = this.props;
    return (
      <div id={id} className={classes.dimension} />
    );
  }
}

Map.propTypes = {
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
  id: PropTypes.string.isRequired,
  classes: PropTypes.shape({
    dimension: PropTypes.string,
  }).isRequired,
};

const styles = {
  dimension: {
    width: '100%',
    height: '100%',
  },
};

const mapStateToProps = state => ({ restaurants: state.Restaurants });

const styledComponent = withStyles(styles)(Map);
export default connect(mapStateToProps)(styledComponent);
