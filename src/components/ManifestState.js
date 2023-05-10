import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Error from '@material-ui/icons/Error';
import { Tooltip } from '@material-ui/core';

class ManifestState extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { 
            manifestState, 
            t 
        } = this.props;
        return (
            <React.Fragment>
                { 
                    manifestState 
                    ? <></>
                    : <Tooltip title={t('not_avail')}><Error fontSize="large" color="primary" style={{ cursor: 'default' }} /></Tooltip>
                }
            </React.Fragment>
        )
    }
}

ManifestState.propTypes = {
    manifestState: PropTypes.bool,
    t: PropTypes.func.isRequired,
};

ManifestState.defaultProps = {
    manifestState: false,
}

export default ManifestState;
