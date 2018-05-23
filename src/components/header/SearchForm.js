import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { setSearchCriterion, setSearchTerm, setMoviesToStore } from '../../actions';
import _ from 'lodash';

const findMovies = (movies=[], searchFor='title', searchTerm) => {
    if (searchTerm) {
        let founded = _.find(movies, (o) => o[searchFor].toLowerCase() == searchTerm.trim().toLowerCase() )
        if (!_.isArray(founded)) {
            return [].concat(founded);
        }
        return founded;
    }
};

class SearchForm extends Component {
    render () {
        return ( 
            <Fragment>
                <div className="search-panel__form">
                    <label htmlFor="searchPanelInput">Find your movie</label>
                    <input type="text" id="searchPanelInput"/>
                </div>
        
                <div className="search-panel__filter">
                    <label id="filterDescription">
                    Search by:
                    </label>
                    {this.getFilter()}

                    <button 
                        className="search-panel__button-search"
                        onClick={() => {
                            let term = document.getElementById('searchPanelInput').value;
                            let founded = findMovies(this.props.movies, this.props.searchBy, term);
                            this.props.setSearchTerm(term);
                            console.log(founded)
                            this.props.updateResults(founded);
                        }}
                    >
                        Search
                    </button>
                </div>
            </Fragment>
        );
    }

    getFilter() {
        const searches = ['title', 'release_date', 'genre'];

        return searches.map((el) => 
            <button
                key={el}
                className="search-panel__button-filter"
                disabled={(el === this.props.searchBy)}
                onClick={() => {
                    this.props.setSearchCriterion(el);
                    // console.log(this.props.searchBy);
                }}
            >
                {el}
            </button>
    
        );

    }
}



let mapStateToProps = (state) => ({
    searchBy: state.searchBy,
    serchTerm: state.searchTerm,
    movies: state.data.data
});

const mapDispatchToProps = (dispatch) => ({
    setSearchCriterion: (prop) => {
        dispatch(setSearchCriterion(prop));
    },
    setSearchTerm: (prop) => {
        dispatch(setSearchTerm(prop));
    },
    updateResults: (movies) => {
        dispatch(setMoviesToStore(movies))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchForm);
