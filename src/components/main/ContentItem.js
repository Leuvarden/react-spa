import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContentItem extends Component {

    render () {
        const props = this.props;

        return (
            <figure className="content-item" onClick={() => props.updateFilmPanel(props)}>
                <img src={props.img} className="content-item_img"></img>
                <figcaption className="content-item__description">
                    <span className="content-item_year">
                        {/* todo: move it smwhere else */}
                        {props.date.slice(0, 4)}
                    </span>
                    <span className="content-item_title"><b>{props.title}</b></span>
                    <span className="content-item_genre">
                        {/* todo: move it smwhere else */}
                        {props.genres.length > 1 ? `${props.genres[0]} & ${props.genres[1]}` : props.genres[0]}
                    </span>
                </figcaption>
            </figure>
        );
    }
}

ContentItem.propTypes = {
    genres: PropTypes.array,
    updateFilmPanel: PropTypes.func,
    title: PropTypes.string,
    img: PropTypes.string,
    date: PropTypes.string
};

export default ContentItem;