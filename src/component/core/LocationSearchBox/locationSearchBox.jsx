import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Room from '@material-ui/icons/Room';
import locationActionCreators from '../../../actions/location';

class LocationSearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLocation: '',
    };
    this.handleUserSearch = this.handleUserSearch.bind(this);
    this.handleSelectLocation = this.handleSelectLocation.bind(this);
  }

  handleUserSearch(e) {
    const { fetchLocations } = this.props;
    if (e.target.value.length > 2) fetchLocations(e.target.value);
    this.setState({
      selectedLocation: e.target.value,
    });
  }

  handleSelectLocation(location) {
    const { selectLocation } = this.props;
    selectLocation(location);
    this.setState({
      selectedLocation: location,
    });
  }

  createSuggestionList() {
    const { locations, classes } = this.props;
    const { selectedLocation } = this.state;
    return locations.length > 0 && locations.indexOf(selectedLocation) < 0 ? (
      <ul className={classes.suggestionList}>
        {locations.slice(0, 5).map(location => (
          <li key={location} className={classes.suggestionListItem}>
            <div role="menuitem" tabIndex="-1" onClick={() => this.handleSelectLocation(location)} onKeyDown={() => {}}>
              {location}
            </div>
          </li>))}
      </ul>
    ) : null;
  }

  render() {
    const { classes } = this.props;
    const { selectedLocation } = this.state;
    return (
      <Grid container>
        <Grid item xs={12} sm={7} md={8}>
          <TextField
            onChange={this.handleUserSearch}
            fullWidth
            InputProps={
              {
                value: selectedLocation,
                disableUnderline: true,
                placeholder: 'Search cuisine by city',
                classes: {
                  input: classes.bootstrapInput,
                },
              }
            }
          />
          <div>
            {this.createSuggestionList()}
          </div>
        </Grid>
        <Grid item xs={12} sm={5} md={4}>
          <Button variant="contained" color="primary" fullWidth className={classes.locationBtn}>
            <Room />
            Current Location
          </Button>
        </Grid>
      </Grid>
    );
  }
}

LocationSearchBox.propTypes = {
  classes: PropTypes.shape({
    bootstrapInput: PropTypes.string,
    locationBtn: PropTypes.string,
  }).isRequired,
  fetchLocations: PropTypes.func.isRequired,
  selectLocation: PropTypes.func.isRequired,
  locations: PropTypes.arrayOf(PropTypes.string),
};

LocationSearchBox.defaultProps = {
  locations: [],
};

const styles = {
  bootstrapInput: {
    borderRadius: 4,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    margin: '5px',
  },
  locationBtn: {
    margin: '5px',
    width: 'calc(100% - 10px)',
  },
  suggestionList: {
    listStyleType: 'none',
    margin: '5px',
    padding: 0,
    border: '1px solid #CCCCCC',
    boxShadow: '3px 3px 3px #CCCCCC',
  },
  suggestionListItem: {
    padding: '5px',
    userSelect: 'none',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#D6D6D6',
    },
  },
};

const mapStateToProps = state => ({ locations: state.Locations });

const mapDispatchToProps = dispatch => ({
  fetchLocations: (query) => {
    dispatch(locationActionCreators.fetchLocations(query));
  },
  selectLocation: (location) => {
    dispatch(locationActionCreators.selectLocations(location));
  },
});

const styledComponent = withStyles(styles)(LocationSearchBox);
export default connect(mapStateToProps, mapDispatchToProps)(styledComponent);
