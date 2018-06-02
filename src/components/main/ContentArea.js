import uniqueId from 'lodash/uniqueId';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import EmptyContent from './contentItems/EmptyContent';
import ContentItem from './contentItems/ContentItem';
import './../../styles/content-area.scss';

class ContentArea extends Component {
    render() {   
        return (
            <section className='content-container'>
                {this.getContent()}
            </section>
        );
    }

    //todo: brokes when switching to ssr
    componentDidMount() {
        if (!this.props.location) {
            return;
        }
        if (!this.props.activeMovie) {
            return;
        }
        const params = new URLSearchParams(this.props.location.search);
        
        let searchBy = params.get('searchBy'); //todo if undefined (now is needed to find issues)
        let query = (params.get('query') === 'all') ? '' : params.get('query');

        if (query && query.length) { //todo: check if probably conflicts with searchButton
            this.props.setSearchParams({query, searchBy});
        }
    }
    
    getContent() {
        let activeMovie = this.props.activeMovie;

        if (this.props.movies[0]) {

            return this.props.movies.map((el) => {
                if (activeMovie && el.title === activeMovie.title) {
                    return null;
                }

                return (
                    <ContentItem
                        key={uniqueId(el.id)}
                        movie={el}
                    />
                    
                );
            }
            );
        } else {
            return <EmptyContent />;
        }
    }
}

export default ContentArea;

ContentArea.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.object
    ),
    activeMovie: PropTypes.object,
    setSearchParams: PropTypes.func,
    location: PropTypes.object,
};

ContentArea.defaultProps = {
    movies: []
};