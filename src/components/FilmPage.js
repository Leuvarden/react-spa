import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import FilmPanel from './main/FilmPanel';
import ContentArea from './main/ContentArea';
import './../styles/film-panel.scss';

class FilmPage extends Component {
    render () {
        return (
            <Fragment>
                {this.props.activeMovie.genres && <FilmPanel movie={this.props.activeMovie} />}
                <ContentArea movies={this.props.sameGenreMovies} activeMovie={this.props.activeMovie} />
            </Fragment>
        );
    }
    
    //todo: FilmPage doesn't rerender after navigation through links, location of render persists
    componentDidMount() {
        this.props.fetchMovieById(this.props.filmId);
        this.props.getSameGenres(this.props.filmId, this.props.sortBy)
    }
}

export default FilmPage;

FilmPage.propTypes = {
    activeMovie: PropTypes.object,
    sameGenreMovies: PropTypes.array
};