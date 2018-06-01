import uniqueId from 'lodash/uniqueId';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import EmptyContent from './contentItems/EmptyContent';
import ContentItem from './contentItems/ContentItem';
import './../../styles/content-area.scss';

class ContentArea extends Component {
    render() {   
        return (
            <section className='content-container'>
                {this.getContent()}
            </section>
        );
    }

    componentDidMount() {
        if (!this.props.location) {
            return;
        }
        const params = new URLSearchParams(this.props.location.search);
        
        let searchBy = params.get('searchBy');
        let query = (params.get('query') === 'all') ? '' : params.get('query');

        if (query && query.length && this.props.searchTerm.length > 0) {
            this.props.updateResults(query, searchBy);
        }
    }
    
    getContent() {
        let activeMovie = this.props.activeMovie;

        if (this.props.movies[0]) {

            return this.props.movies.map((el) => {
                if (activeMovie && el.title === activeMovie.title) {
                    return null;
                }

                return (
                    <ContentItem
                        key={uniqueId(el.id)}
                        movie={el}
                        // id={el.id} 
                        // genres={el.genres} 
                        // img={el.poster_path}
                        // date={el.release_date} 
                        // title={el.title} 
                    />
                    
                );
            }
            );
        } else {
            return <EmptyContent />;
        }
    }
}

export default ContentArea;

ContentArea.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.object
    ),
    activeMovie: PropTypes.object,
    updateResults: PropTypes.func,
    location: PropTypes.object,
    searchTerm: PropTypes.string
};

ContentArea.defaultProps = {
    searchTerm: '',
    movies: []
};