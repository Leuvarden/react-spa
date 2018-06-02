import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FilmPanel from './main/FilmPanel';
import ContentArea from './main/ContentArea';
import './../styles/film-panel.scss';


//todo: ContentArea is broken after replacing thunk with saga
const FilmPage = ({activeMovie, sameGenreMovies}) => {
    return (
        <Fragment>
            <FilmPanel movie={activeMovie} />
            <ContentArea movies={sameGenreMovies} activeMovie={activeMovie} /> 
        </Fragment>
    );
};

export default FilmPage;

FilmPage.propTypes = {
    activeMovie: PropTypes.object,
    sameGenreMovies: PropTypes.array
};