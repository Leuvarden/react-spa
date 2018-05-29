import React from 'react';
import ContentAreaContainer from './../containers/ContentAreaContainer';
import SearchPanel from './header/SearchPanel';

const MainPage = ({location}) => {
    // const params = new URLSearchParams(location.search);
    // console.log(params.get('search'));
    return (
        <main>
            <SearchPanel />
            <ContentAreaContainer />
        </main>
    );
};

export default MainPage;