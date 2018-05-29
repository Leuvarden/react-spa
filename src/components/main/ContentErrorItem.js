import React from 'react';

const ContentErrorItem = ({ match: { params } }) => {
    console.log(params)
    return (
        <figure className="content-item">

            <figcaption className="content-item__description">
                <span className="content-item_title">
                   Uhm
                </span>
            </figcaption>
        </figure>
    );
};

export default ContentErrorItem;