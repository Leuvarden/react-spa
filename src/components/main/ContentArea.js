import _ from 'lodash';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { selectMovie, fetchMovies } from './../actions';

import ErrorBoundary from './../Error.js';
import EmptyContent from './EmptyContent';
import FilmPanel from './FilmPanel';
import ContentItem from './ContentItem';
import './../../styles/content-area.scss';

export class ContentArea extends Component {
    constructor(props) {
        super(props);
        this.url = 'http://react-cdp-api.herokuapp.com/movies';
    }

    getContent () {
        let movies = this.props.movies;

        if (this.props.movies && movies.length) {
            const items = this.sortMovies(movies).map((el) => 
                <ErrorBoundary key={el.id} showOnError={this.getErrorDiv()}>                 
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
            return items;
        } else {
            return <EmptyContent />;
        }
    }

    render() {   
        return (
            <section className='content-container'>
                <FilmPanel /> 
                {this.getContent()}
            </section>
        );
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchMovies(this.url));
    }

    getErrorDiv() {
        return (
            <figure className="content-item">
                <img src='./../../public/img/cube.gif' className="content-item_img"></img>
                <figcaption className="content-item__description">
                    <span className="content-item_title"><b>Loading...</b></span>
                </figcaption>
            </figure>
        );
    }

    sortMovies (movies) {
        let criterion = this.props.sortBy || 'title';
        if (movies) {
            return _.orderBy(movies, [criterion], 'asc');
        }
    }
}

let mapPropsToStore = (state) => ({
    movies: state.data.data,
    activeMovie: state.activeMovie,
    sortBy: state.sortBy
});

const mapDispatchToProps = (dispatch) => ({
    selectMovie: (prop) => {
        dispatch(selectMovie(prop));
    }, 
    dispatch: dispatch
});

export default connect(
    mapPropsToStore, 
    mapDispatchToProps
)(ContentArea);

ContentArea.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.object
    ),
    selectMovie: PropTypes.func,
    dispatch: PropTypes.func,
    sortBy: PropTypes.string,
};