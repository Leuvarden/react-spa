import React from 'react';

const ContentErrorItem = () => {
    return (
        <figure className="content-item">
            <img src='./../../public/img/cube.gif' className="content-item_img" />
            <figcaption className="content-item__description">
                <span className="content-item_title">
                    <b>Loading...</b>
                </span>
            </figcaption>
        </figure>
    );
};

export default ContentErrorItem;