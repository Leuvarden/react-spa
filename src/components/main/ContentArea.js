import React, { Component } from 'react';
import ContentItem from './ContentItem';
import EmptyContent from './EmptyContent';
import FilmPanel from './FilmPanel';
import ErrorBoundary from './../Error.js';
import FetchItems from './FetchItems';
import './../../styles/content-area.scss';

export default class ContentArea extends Component {
    constructor(props) {
        super(props);
        this.url = 'http://react-cdp-api.herokuapp.com/';

        this.state = {
            contentData: []
        };

        this.updateFilmPanel = this.updateFilmPanel.bind(this);
    }

    getContent () {
        if (this.state.contentData) {
            const items = (this.state.contentData).map((el) => 
                <ErrorBoundary key={el.id} showOnError={this.getErrorDiv()}>                 
                    <ContentItem
                        key={el.id} 
                        genres={el.genres} 
                        img={el.poster_path}
                        date={el.release_date} 
                        title={el.title} 
                        overview={el.overview}
                        updateFilmPanel={this.updateFilmPanel}
                    />
                </ErrorBoundary>
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
        // console.log(this.state); 
        return (
            <section className='content-container'>
                {this.getPanel()}
                {this.getContent()}
            </section>
        );
    }

    componentDidMount() {
        FetchItems(`${this.url}movies`)
            .then(response => this.setState({contentData: response.data }) );
    }

    updateFilmPanel(filmProps) {
        this.setState({currentItem: filmProps});
    }

    getErrorDiv () {
        return (
            <figure className="content-item">
                <img src='./../../public/img/cube.gif' className="content-item_img"></img>
                <figcaption className="content-item__description">
                    <span className="content-item_title"><b>Loading...</b></span>
                </figcaption>
            </figure>
        );
    }
}
