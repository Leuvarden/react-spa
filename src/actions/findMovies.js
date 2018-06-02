import _filter from 'lodash/filter';
import _includes from 'lodash/includes';
import _isArray from 'lodash/isArray';

const findMovies = (movies=[], params) => {
    if (params.query) {
        const searchFor = params.searchBy;

        let founded = _filter(movies, (o) => {

            let target;

            if (_isArray(o[searchFor])) {
                target = o[searchFor].join(' ').toLowerCase();
            } else {
                target = o[searchFor].toString().toLowerCase();
            }
            
            return _includes(target, params.query.trim().toLowerCase());
        });

        return [].concat(founded);
    }

    return movies;
};

export default findMovies;