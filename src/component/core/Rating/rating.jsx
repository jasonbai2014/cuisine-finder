import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Rating = ({ rating, votes, classes }) => {
  const stars = [];
  for (let i = 0; i < 5; i += 1) {
    if (rating >= i && rating < i + 1) {
      stars.push(<FontAwesomeIcon key={i} icon="star-half" className={classes.star} />);
    } else if (rating >= i) {
      stars.push(<FontAwesomeIcon key={i} icon="star" className={classes.star} />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon="star" className={classes.emptyStar} />);
    }
  }
  return (
    <div title={`${rating} out of 5 stars`}>
      {stars}
      <span className={classes.votes}>
        {`${votes} votes`}
      </span>
    </div>
  );
};

Rating.propTypes = {
  classes: PropTypes.shape({
    star: PropTypes.string,
    emptyStar: PropTypes.string,
    votes: PropTypes.string,
  }).isRequired,
  rating: PropTypes.string.isRequired,
  votes: PropTypes.string.isRequired,
};

const styles = {
  star: {
    color: 'gold',
  },
  emptyStar: {
    color: 'transparent',
  },
  votes: {
    padding: '0 10px',
  }
};

export default withStyles(styles)(Rating);
