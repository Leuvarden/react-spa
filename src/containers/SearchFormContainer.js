import { connect } from 'react-redux';
import { setSearchParams } from '../actions';
import SearchForm from '../components/header/SearchForm';


let mapStateToProps = (state) => ({
    searchParams: state.searchParams
});

const mapDispatchToProps = (dispatch) => ({
    setSearchParams: (params) => {
        dispatch(setSearchParams(params));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchForm);
