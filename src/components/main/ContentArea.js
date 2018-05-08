import React, { Component } from 'react';
import ContentItem from './ContentItem';
import EmptyContent from './EmptyContent';
import FilmPanel from './FilmPanel';

export default class ContentArea extends Component {
    constructor(props) {
        super(props);
        this.baseUrl = 'http://react-cdp-api.herokuapp.com/';

        this.state = {
            contentData: []
        };

        this.updateFilmPanel = this.updateFilmPanel.bind(this);
    }

    getContent () {
        console.log(this.state);
        if (this.state.contentData) {
            const items = (this.state.contentData).map((el) => 
                <ContentItem 
                    key={el.id} 
                    genres={el.genres} 
                    img={el.poster_path}
                    date={el.release_date} 
                    title={el.title} 
                    overview={el.overview}
                    updateFilmPanel={this.updateFilmPanel}
                />
            );
            return items;
        } else {
            return <EmptyContent />;
        }
    }

    getPanel() {
        if (!this.state.currentItem) {
            return;
        } else {
            let item = this.state.currentItem;
            return <FilmPanel 
                img={item.img}
                title={item.title}
                genres={item.genres}
                overview={item.overview} 
                date={item.date}
            />;
        }
    }

    render() {    
        return (
            <section className='content-container'>
                {this.getPanel()}
                {this.getContent()}
            </section>
        );
    }

    componentDidMount() {
        fetch(`${this.baseUrl}movies`)
            .then(response => response.json())
            .then(response => this.setState({contentData: response.data }) );
    }

    updateFilmPanel(filmProps) {
        this.setState({currentItem: filmProps});
    }
}
