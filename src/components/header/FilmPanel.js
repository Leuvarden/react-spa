import React, {Component} from 'react';

export default class FilmPanel extends Component {
    render () {
        return (
            <section className="film-panel">
                <div>
                    <span className="logo">netflixroulette</span>
                    <button className="film-panel__button-search">Search</button>
                </div>
                <figure>
                    <div className="film-panel_poster"> 
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbwrzbJdCnh06TnSF36p7gxWAlDKfSNiChu3HyZ1ccSsHW_Q7XQ"></img>
                    </div>
                    <figcaption className="film-panel_description">
                        <h1>Pulp Fiction</h1>
                        <p className="film-panel_category">Oscar-winning movies</p>
                        <p>
                            <span className="film-panel_year">1994</span>
                            <span className="film-panel_duration">154 min</span>
                        </p>
                        <p className="film-panel_overview"></p>  
                    </figcaption>
                </figure>
            </section>
        );
    }
}