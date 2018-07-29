import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import errorActionCreators from '../../../actions/error';

class ErrorDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    const { onDismissMessage } = this.props;
    onDismissMessage();
  }

  render() {
    const { error } = this.props;
    return (
      <div>
        <Dialog open={error !== ''}>
          <DialogContent>
            <DialogContentText>
              { error }
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ErrorDialog.propTypes = {
  error: PropTypes.string,
  onDismissMessage: PropTypes.func.isRequired,
};

ErrorDialog.defaultProps = {
  error: '',
};

const mapStateToProps = state => ({ error: state.Error });

const mapDispatchToProps = dispatch => ({
  onDismissMessage: () => {
    dispatch(errorActionCreators.clearErrorMessage());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorDialog);
