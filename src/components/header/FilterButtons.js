import React from 'react';

const searches = ['title', 'genres'];

const FilterButtons = ({ searchBy, setSearchCriterion }) => {
    return searches.map((name) => 
        <button
            key={name}
            className={
                `search-panel__button-filter 
                ${ (name === searchBy) && 'search-panel__button-filter_active' }`
            }
            onClick={() => setSearchCriterion(name)}
        >
            {name}
        </button>

    );
};

export default FilterButtons;
