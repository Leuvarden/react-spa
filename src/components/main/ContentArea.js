import PropTypes from 'prop-types';
import React, { Component } from 'react';

import ErrorBoundary from './../Error.js';
import EmptyContent from './EmptyContent';
import FilmPanel from './../../containers/FilmPanelContainer';
import ContentItem from './ContentItem';
import ContentErrorItem from './ContentErrorItem';
import './../../styles/content-area.scss';

class ContentArea extends Component {
    render() {   
        return (
            <section className='content-container'>
                <FilmPanel /> 
                {this.getContent()}
            </section>
        );
    }
    
    componentDidMount() {
        this.props.fetchMovies();
    }

    getContent() {
        let movies = this.props.movies;

        if (this.props.movies && movies.length) {
            return movies.map((el) => 
                <ErrorBoundary 
                    key={el.id} 
                    showOnError={ContentErrorItem()}>                 
                    <ContentItem
                        key={el.id} 
                        genres={el.genres} 
                        img={el.poster_path}
                        date={el.release_date} 
                        title={el.title} 
                        overview={el.overview}
                        updateFilmPanel={() => {
                            this.props.selectMovie(el);
                            document.body.scrollTop = 0;
                            document.documentElement.scrollTop = 0;
                        }}
                    />
                </ErrorBoundary>
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
    selectMovie: PropTypes.func,
    fetchMovies: PropTypes.func,
    sortBy: PropTypes.string,
};