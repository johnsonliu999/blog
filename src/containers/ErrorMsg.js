import React from 'react'
import {connect} from 'react-redux'
import {Alert} from 'react-bootstrap'

const ErrorMsg = ({errorMsg}) => (
    errorMsg &&
    <Alert bsStyle={"danger"}>
        <strong>{errorMsg}</strong>
    </Alert>
);

const mapStateToProps = (state) => ({errorMsg : state.errorMsg});

export default connect(mapStateToProps)(ErrorMsg);