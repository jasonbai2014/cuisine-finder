import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LocationMap from '../../../modules/map';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
    };
  }

  componentDidMount() {
    const { id, coords } = this.props;
    this.setState({
      map: new LocationMap(id, coords[0], coords[1]),
    });
  }

  componentDidUpdate() {
    const { restaurants, coords } = this.props;
    const { map } = this.state;
    if (map) {
      map.setCenter(coords[0], coords[1]);
      map.setLocationOverlays(restaurants);
    }
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
  coords: PropTypes.arrayOf(PropTypes.number).isRequired,
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

const mapStateToProps = state => ({ restaurants: state.Restaurants, coords: state.CityCoords });

const styledComponent = withStyles(styles)(Map);
export default connect(mapStateToProps)(styledComponent);
