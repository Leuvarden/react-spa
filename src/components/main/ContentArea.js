import React, { Component } from 'react';
import ContentItem from './ContentItem';
import EmptyContent from './EmptyContent';
import axios from 'axios';

export default class ContentArea extends Component {
    constructor(props) {
        super(props);
        this.baseUrl = 'http://react-cdp-api.herokuapp.com/';

        this.state = {};
    }

    getContent () {
        if (this.state.data) {
            const items = (this.state.data).map((el) => 
                <ContentItem key={el.id} genres={el.genres} img={el.poster_path}
                    date={el.release_date} title={el.title} votes={el.vote_count}
                    overview={el.overview} />
            );
            return items;
        } else {
            return <EmptyContent />;
        }
    }

    render() {    
        return (
            <section className="content-container">
                {this.getContent()}
            </section>
        );
    }

    componentDidMount() {
        axios.get(`${this.baseUrl}movies`)
            .then(response => this.setState(response.data));
    }
}
