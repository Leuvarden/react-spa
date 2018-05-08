import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FilmPanel extends Component {
    render () {
        const props = this.props;

        return (
            <section className="film-panel">
                <figure>
                    <div className="film-panel_poster"> 
                        <img src={props.img}></img>
                    </div>
                    <figcaption className="film-panel_description">
                        <h1>{props.title}</h1>
                        <p className="film-panel_category">{props.genres[0]}</p>
                        <p>
                            <span className="film-panel_year">{props.date.slice(0, 4)}</span>
                            {/* <span className="film-panel_duration">154 min</span> */}
                        </p>
                        <p className="film-panel_overview">{props.overview}</p>  
                    </figcaption>
                </figure>
            </section>
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