import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../../styles/film-panel.scss';

export default class FilmPanel extends Component {
    render () {
        return (
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
                <h1>{this.props.title}</h1>
                <p className="film-panel_category">
                    {this.props.genres[0]}
                </p>
                <p className="film-panel_year">
                    {this.props.date.slice(0, 4)}
                </p>
                <p className="film-panel_overview">
                    {this.props.overview}
                </p>  
            </figcaption>
        );
    }

    getPoster () {
        return (
            <div className="film-panel_poster"> 
                <img src={this.props.img}></img>
            </div>
        );
    }
}

FilmPanel.propTypes = {
    genres: PropTypes.array,
    overview: PropTypes.string,
    title: PropTypes.string,
    img: PropTypes.string,
    date: PropTypes.string
};