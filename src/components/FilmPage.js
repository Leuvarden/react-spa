import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import FilmPanel from './main/FilmPanel';
import ContentArea from './main/ContentArea';
import './../styles/film-panel.scss';

class FilmPage extends Component {
    render () {
        return (
            <Fragment>
                <FilmPanel movie={this.props.activeMovie} />
                <ContentArea movies={this.props.sameGenreMovies} activeMovie={this.props.activeMovie} /> 
                oh hi
            </Fragment>
        );
    }
    //todo: is broken after replacing thunk with saga
    componentDidMount() {
        // console.log(this.props.match.params.id);
        this.props.setActiveMovie(this.props.match.params.id);
    }
}

export default FilmPage;

FilmPage.propTypes = {
    activeMovie: PropTypes.object,
    sameGenreMovies: PropTypes.array
};