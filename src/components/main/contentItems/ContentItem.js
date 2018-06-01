import React from 'react';
import PropTypes from 'prop-types';
import ContentLink from './../../../containers/ContentLink';
import ErrorBoundary from './../../common/Error';
import ContentErrorItem from './ContentErrorItem';
import ContentItemCaption from './ContentItemCaption';

const ContentItem = ({movie}) => {
    return (
        <ErrorBoundary 
            showOnError={ContentErrorItem()}>    
            <figure 
                className="content-item"
                onClick= {() => { document.body.scrollTop = 0; document.documentElement.scrollTop = 0;} }
            >

                <ContentLink id={movie.id}>
                    <img src={movie.poster_path} className="content-item_img" />
                </ContentLink>

                <ContentItemCaption movie={movie}/>
            </figure>
        </ErrorBoundary>
    );
};

ContentItem.propTypes = {
    movie: PropTypes.object
};

export default ContentItem;