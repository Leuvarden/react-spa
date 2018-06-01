import React from 'react';
import App from './components/App';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import MainPage from './components/MainPage';
import NotFound from './components/main/NotFound';
import FilmPageContainer from './containers/FilmPageContainer';
import ContentAreaContainer from './containers/ContentAreaContainer';
import { hot } from 'react-hot-loader';

const Routes = ({ Router, location, context, store }) => (
    <Provider store={store}>
        <Router location={location} context={context}>
            <Switch>
                <App>
                    <Route exact path="/" component={(args) => <MainPage {...args} />} />
  
                    <Route path="/films">
                        <Switch>
                            <Route exact path="/films" component={ContentAreaContainer} />
                            <Route path="/films/:id" component={FilmPageContainer} />
                        </Switch>
                    </Route>

                    <Route exact path="/search(/)" component={(args) => <MainPage {...args} />} />
                </App>

                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    </Provider>
);

export default hot(module)(Routes);

Routes.propTypes = {
    store: PropTypes.object.isRequired,
    Router: PropTypes.func.isRequired,
    location: PropTypes.string,
    context: PropTypes.shape({
        url: PropTypes.string,
    }),
};

Routes.defaultProps = {
    location: null,
    context: null
};