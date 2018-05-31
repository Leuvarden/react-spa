import React from 'react';
import ContentAreaContainer from './../containers/ContentAreaContainer';
import SearchPanel from './header/SearchPanel';

const MainPage = () => {
    return (
        <main>
            <SearchPanel />
            <ContentAreaContainer />
        </main>
    );
};

export default MainPage;