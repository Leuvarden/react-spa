import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './../../styles/film-panel.scss';

export class FilmPanel extends Component {
    render () {
        return this.props.movie && (
            <section className="film-panel">
                <figure>
                    {this.getPoster()}
                    {this.getCaption()}
                </figure>
            </section>
        );
    }

    getCaption () {
        return (
            <figcaption className="film-panel_description">
                <h1>{this.props.movie.title}</h1>
                <p className="film-panel_category">
                    {this.props.movie.genres[0]}
                </p>
                <p className="film-panel_year">
                    {this.props.movie.release_date.slice(0, 4)}
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
}

let mapPropsToStore = (state) => ({
    movie: state.activeMovie
});

export default connect(
    mapPropsToStore, 
)(FilmPanel);

FilmPanel.propTypes = {
    movie: PropTypes.arrayOf({
        genres: PropTypes.array,
        overview: PropTypes.string,
        title: PropTypes.string,
        poster_path: PropTypes.string,
        release_date: PropTypes.string
    })
};