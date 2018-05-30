import { connect } from 'react-redux';
import SortPanel from '../components/header/SortPanel';

let mapStateToProps = (state) => ({
    moviesFound: state.data.data ? state.data.data.length : 0
});

export default connect(
    mapStateToProps
)(SortPanel);
