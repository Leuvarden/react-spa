import React, { Component } from 'react';
import {connect} from 'react-redux';
import { selectMovie, fetchMovies } from './../actions';

import ErrorBoundary from './../Error.js';
import EmptyContent from './EmptyContent';
import FilmPanel from './FilmPanel';
import ContentItem from './ContentItem';
import './../../styles/content-area.scss';

class ContentArea extends Component {
    constructor(props) {
        super(props);
        this.url = 'http://react-cdp-api.herokuapp.com/movies';
    }

    getContent () {
        if (this.props.movies && this.props.movies.length) {
            const items = (this.props.movies).map((el) => 
                <ErrorBoundary key={el.id} showOnError={this.getErrorDiv()}>                 
                    <ContentItem
                        key={el.id} 
                        genres={el.genres} 
                        img={el.poster_path}
                        date={el.release_date} 
                        title={el.title} 
                        overview={el.overview}
                        updateFilmPanel={() => this.props.selectMovie(el)}
                    />
                </ErrorBoundary>
            );
            return items;
        } else {
            return <EmptyContent />;
        }
    }

    render() {   
        return (
            <section className='content-container'>
                <FilmPanel /> 
                {this.getContent()}
            </section>
        );
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchMovies(this.url))
    }

    getErrorDiv() {
        return (
            <figure className="content-item">
                <img src='./../../public/img/cube.gif' className="content-item_img"></img>
                <figcaption className="content-item__description">
                    <span className="content-item_title"><b>Loading...</b></span>
                </figcaption>
            </figure>
        );
    }
}

let mapPropsToStore = (state) => ({
    movies: state.data.data,
    activeMovie: state.activeMovie
});

const mapDispatchToProps = (dispatch) => ({
    selectMovie: (prop) => {
        dispatch(selectMovie(prop));
    }, 
    dispatch: dispatch
});

export default connect(
    mapPropsToStore, 
    mapDispatchToProps
)(ContentArea);