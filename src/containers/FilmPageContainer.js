import React, { Fragment } from 'react';
import findMovies from './../actions/findMovies';
import { connect } from 'react-redux';
import { FilmPanel } from '../components/main/FilmPanel';
import { NavLink } from 'react-router-dom';
import ContentArea from '../components/main/ContentArea';

let mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id || '0';
    let movie = findMovies(state.data.data, 'id', id)[0];

    return {
        activeMovie: movie,
        sameGenreMovies: findMovies(state.data.data, 'genres', movie.genres[0])
    };
};

const FilmPageContainer = ({activeMovie, sameGenreMovies}) => {
    console.log(sameGenreMovies);
    return (
        <Fragment>
            <NavLink to="/">Home</NavLink>
            <FilmPanel movie={activeMovie} />
            <div>Films by {activeMovie.genres[0]} genre</div>
            <ContentArea movies={sameGenreMovies} />
        </Fragment>
    );
};

// function getSameGenres() {
//     if (this.props.sameGenreMovies && this.props.sameGenreMovies[0]) {
//         return this.props.sameGenreMovies.map((el) => 
//             <div key={el.id}>
//                 <Link 
//                     to={`/film/${el.id}`} 
                    
//                     onClick={() => this.props.selectMovie(this.props.movies, el.id)} 
//                 >
//                     {el.title} - {el.id}
//                 </Link>
//             </div>
//         );
//     }
// }

export default connect(mapStateToProps)(FilmPageContainer);