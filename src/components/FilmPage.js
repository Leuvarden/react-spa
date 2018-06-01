import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FilmPanel from './main/FilmPanel';
import ContentArea from './main/ContentArea';
import './../styles/film-panel.scss';



const FilmPage = ({activeMovie, sameGenreMovies}) => {
    return (
        <Fragment>
            <FilmPanel movie={activeMovie} />

            {/* <div className="film-panel__sorting">
                <span>Films by {activeMovie.genres[0]} genre</span>
            </div> */}

            <ContentArea movies={sameGenreMovies} activeMovie={activeMovie} />
        </Fragment>
    );
};

export default FilmPage;

FilmPage.propTypes = {
    activeMovie: PropTypes.object,
    sameGenreMovies: PropTypes.array
};