import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContentLink from './../../containers/ContentLink';

class ContentItem extends Component {

    render () {
        const props = this.props;
        return (
            <figure 
                className="content-item"
                onClick= {() => {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                }}
            >

                <ContentLink id={props.id}>
                    <img src={props.img} className="content-item_img"></img>
                </ContentLink>

                {this.getCaption()}
            </figure>
        );
    }

    getCaption() {
        const props = this.props;
        return (
            <figcaption className="content-item__description">
                <span className="content-item_year">
                    {props.date.slice(0, 4)}
                </span>
                <h3 className="content-item_title">
                    <ContentLink id={props.id}>
                        {props.title}
                    </ContentLink>
                </h3>
                <span className="content-item_genre">
                    {props.genres.length > 1 ? 
                        `${props.genres[0]} & ${props.genres[1]}` : 
                        props.genres[0]}
                </span>
            </figcaption>
        );
    }
}

ContentItem.propTypes = {
    genres: PropTypes.array,
    title: PropTypes.string,
    img: PropTypes.string,
    date: PropTypes.any
};

export default ContentItem;