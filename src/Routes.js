import React from 'react';
import App from './components/App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import EmptyContent from './components/main/EmptyContent';
// import ContentErrorItem from './components/main/ContentErrorItem';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import MainPage from './components/MainPage';
import ContentArea from './components/main/ContentArea';
import FilmPageContainer from './containers/FilmPageContainer';
import ContentAreaContainer from './containers/ContentAreaContainer';



const Routes = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Switch>
            <Route exact path="/" component={MainPage} />

                <Route path="/film">
                    <App>
                        <Switch>
                            <Route exact path="/film" component={ContentAreaContainer} />
                            <Route path="/film/:id" component={FilmPageContainer} />
                        </Switch>
                    </App>
                </Route>

                {/* <Route path='/about' component={App} />

                <Route path='/film/:id' component={App} /> */}
            </Switch>
        </Router>
    </Provider>
);

export default Routes;

Routes.propTypes = {
    store: PropTypes.object.isRequired
};