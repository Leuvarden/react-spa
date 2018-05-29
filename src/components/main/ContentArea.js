import uniqueId from 'lodash/uniqueId';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import ErrorBoundary from './../Error.js';
import EmptyContent from './EmptyContent';
import ContentItem from './ContentItem';
import ContentErrorItem from './ContentErrorItem';
import './../../styles/content-area.scss';

class ContentArea extends Component {
    render() {   
        return (
            <section className='content-container'>
                {this.getContent()}
            </section>
        );
    }
    
    getContent() {
        if (this.props.movies && this.props.movies[0]) {

            return this.props.movies.map((el) => 
                <ErrorBoundary 
                    key={uniqueId(el.id)} 
                    showOnError={ContentErrorItem()}>                 
                    <ContentItem
                        id={el.id} 
                        genres={el.genres} 
                        img={el.poster_path}
                        date={el.release_date} 
                        title={el.title} 
                    />
                </ErrorBoundary>
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
    )
};