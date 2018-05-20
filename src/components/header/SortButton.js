import React from 'react';
import { connect } from 'react-redux';
import { setSorting } from '../actions';
// import SButton from './SButton'

const SortButton = ({ active, children, onClick }) => (
    <button
        onClick={onClick}
        disabled={active}
    >
        {children}
    </button>
);

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.criterion === state.sortBy,
});

const mapDispatchToProps = (dispatch, props) => ({
    onClick: () => dispatch(setSorting(props.criterion))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SortButton);