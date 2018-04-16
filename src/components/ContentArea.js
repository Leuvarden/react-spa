import React, { Component } from 'react';

export default class ContentArea extends Component {
    render () {
        return (
            <section className="content-container">
                <div className="content__empty">No films found</div>
            </section>
        );
    }
}