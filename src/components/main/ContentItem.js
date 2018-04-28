import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ContentItem extends Component {
    constructor (props) {
        super(props);
        this.baseUrl = 'http://react-cdp-api.herokuapp.com/';
    }

    render () {
        const props = this.props;
        return (
            <figure className="content-item">
                <img src={props.img}></img>
                <figcaption className="content-item__description">
                    <span className="content-item_year">{props.date.slice(0, 4)}</span>
                    <span className="content-item_title"><b>{props.title}</b></span>
                    <span className="content-item_genre">
                        {/* todo: move it smwhere else */}
                        {props.genres.length > 1 ? `${props.genres[0]} & ${props.genres[1]}` : props.genres[0]}
                    </span>
                </figcaption>
            </figure>
        );
    }

    // key={el.id} genres={el.genres} img={el.poster_path}
    //                 date={el.release_date} title={el.title} votes={el.vote_count}
    //                 overview={el.overview}


}

ContentItem.propTypes = {
    content: PropTypes.array
};

export default ContentItem;