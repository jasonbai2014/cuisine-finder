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
    this.handleUserSearch = this.handleUserSearch.bind(this);
  }

  handleUserSearch(e) {
    const { fetchLocations } = this.props;
    if (e.target.value.length > 2) fetchLocations(e.target.value);
  }

  render() {
    const { classes, locations } = this.props;
    return (
      <Grid container>
        <Grid item xs={12} sm={7} md={8}>
          <TextField
            onChange={this.handleUserSearch}
            fullWidth
            InputProps={
              {
                disableUnderline: true,
                placeholder: 'Search cuisine by city',
                classes: {
                  input: classes.bootstrapInput,
                },
              }
            }
          />
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
  locations: PropTypes.arrayOf(PropTypes.string),
};

LocationSearchBox.defaultProps = {
  locations: [],
}

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
};

const mapStateToProps = state => ({ locations: state.Locations });

const mapDispatchToProps = dispatch => ({
  fetchLocations: (query) => {
    dispatch(locationActionCreators.fetchLocations(query));
  },
});

const styledComponent = withStyles(styles)(LocationSearchBox);
export default connect(mapStateToProps, mapDispatchToProps)(styledComponent);
