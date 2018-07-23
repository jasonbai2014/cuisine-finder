import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Room from '@material-ui/icons/Room';

const LocationSearchBox = ({ classes }) => (
  <Grid container>
    <Grid item xs={12} sm={7} md={8}>
      <TextField
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

LocationSearchBox.propTypes = {
  classes: PropTypes.shape({
    bootstrapInput: PropTypes.string,
    locationBtn: PropTypes.string,
  }).isRequired,
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
};

export default withStyles(styles)(LocationSearchBox);
