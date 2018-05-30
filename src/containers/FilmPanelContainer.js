import { connect } from 'react-redux';
import FilmPanel from './../components/main/FilmPanel';

let mapPropsToStore = (state) => ({
    movie: state.activeMovie,
});

export default connect(
    mapPropsToStore, 
)(FilmPanel);