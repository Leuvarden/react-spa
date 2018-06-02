import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { setSearchParams } from '../../actions';
import PropTypes from 'prop-types';

const SearchButton = ({ setSearchQuery, searchParams }) => {
    
    return (
        <button 
            className="search-panel__button-search"
            onClick={() => {
                let term = document.getElementById('searchPanelInput');
                let query = term ? term.value : 'all';
                setSearchQuery({
                    query, 
                    searchBy: searchParams.searchBy});
            } }
        >
            Search
        </button>
    );
};

let mapStateToProps = (state) => {
    return {
        searchParams: state.searchParams,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setSearchQuery: (params) => {

            dispatch(setSearchParams(params));

            if (params.query.length) {
                ownProps.history.push(`/?query=${params.query}&searchBy=${params.searchBy}`);
            } else {
                ownProps.history.push(`/?query=all&searchBy=${params.searchBy}`);
            }
        }
    };
};


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(SearchButton)
);

SearchButton.propTypes = {
    searchParams: PropTypes.object,
    setSearchQuery: PropTypes.func,
};