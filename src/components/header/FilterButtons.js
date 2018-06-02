import React from 'react';

const searches = ['title', 'genres'];

const FilterButtons = ({ searchParams, setSearchParams }) => {
    return searches.map((name) => 
        <button
            key={name}
            className={
                `search-panel__button-filter 
                ${ (name === searchParams.searchBy) && 'search-panel__button-filter_active' }`
            }
            onClick={() => setSearchParams({
                query: searchParams.query, 
                searchBy: name
            })
            }
        >
            {name}
        </button>

    );
};

export default FilterButtons;
