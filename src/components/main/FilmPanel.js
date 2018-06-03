import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../../styles/film-panel.scss';

export class FilmPanel extends Component {
    render () {
        return this.props.movie && (
            <section className="film-panel__container">
                <figure  className="film-panel__figure">
                    {this.getPoster()}
                    {this.getCaption()}
                </figure>
                {this.getSameGenres()}
            </section>
        );
    }

    getCaption () {
        return (
            <figcaption className="film-panel_description">
                <h1>{this.props.movie.title}</h1>
                <p className="film-panel_category">
                    {this.props.movie.genres ? this.props.movie.genres[0] : ''}
                </p>
                <p className="film-panel_year">
                    {this.props.movie.release_date ? this.props.movie.release_date.slice(0, 4) : ''}
                </p>
                <p className="film-panel_overview">
                    {this.props.movie.overview}
                </p>  
            </figcaption>
        );
    }

    getPoster () {
        return (
            <div className="film-panel_poster"> 
                <img src={this.props.movie.poster_path}></img>
            </div>
        );
    }

    getSameGenres() {
        if (this.props.movie.genres) {
            return (
                <div className="film-panel__figure film-panel__sorting">
                    <span>Films by {this.props.movie.genres[0]} genre</span>
                </div>
            );
        }
        return null;
    }
}

export default FilmPanel;

FilmPanel.propTypes = {
    movie: PropTypes.object,
    genres: PropTypes.array,
    overview: PropTypes.string,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string
};

FilmPanel.defaultProps = {
    movie: {},
    genres: [],
    overview: '',
    title: '',
    poster_path: '',
    release_date: ''
};