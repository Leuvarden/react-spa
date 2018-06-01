import React from 'react';
import findMovies from './../actions/findMovies';
import { connect } from 'react-redux';
import { FilmPanel } from '../components/main/FilmPanel';
import { NavLink } from 'react-router-dom';
import ContentArea from '../components/main/ContentArea';
import Logo from './../components/main/Logo';
import './../styles/search-panel.scss';

let mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id || '0';
    let movie = findMovies(state.data.data, 'id', id)[0];

    return {
        activeMovie: movie,
        sameGenreMovies: findMovies(state.data.data, 'genres', movie.genres[0]) 
    };
};

const FilmPageContainer = ({activeMovie, sameGenreMovies}) => {
    return (
        <div>
            <Logo />

            <NavLink to="/" className="search-panel__button-search">Search</NavLink>

            <FilmPanel movie={activeMovie} />

            <div className="search-panel__sorting">
                <span>Films by {activeMovie.genres[0]} genre</span>
            </div>

            <ContentArea movies={sameGenreMovies} activeMovie={activeMovie} />
        </div>
    );
};

export default connect(mapStateToProps)(FilmPageContainer);