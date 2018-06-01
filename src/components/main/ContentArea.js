import uniqueId from 'lodash/uniqueId';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import ErrorBoundary from './../Error.js';
import EmptyContent from './EmptyContent';
import ContentItem from './ContentItem';
import ContentErrorItem from './ContentErrorItem';
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
        const params = new URLSearchParams(this.props.location.search);
        // let query = params.get('query');
        let searchBy = params.get('searchBy');

        let query = (params.get('query') === 'all') ? '' : params.get('query');

        this.props.updateResults(query, searchBy);
    }
    
    getContent() {
        let activeMovie = this.props.activeMovie;

        if (this.props.movies && this.props.movies[0]) {

            return this.props.movies.map((el) => {
                if (activeMovie && el.title === activeMovie.title) {
                    return null;
                }
                return (
                    <ErrorBoundary 
                        key={uniqueId(el.id)} 
                        showOnError={ContentErrorItem()}>                 
                        <ContentItem
                            id={el.id} 
                            genres={el.genres} 
                            img={el.poster_path}
                            date={el.release_date} 
                            title={el.title} 
                        />
                    </ErrorBoundary>
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
    activeMovie: PropTypes.object
};