import React from 'react';
import App from './components/App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import MainPage from './components/MainPage';
import NotFound from './components/main/NotFound';
import FilmPageContainer from './containers/FilmPageContainer';
import ContentAreaContainer from './containers/ContentAreaContainer';

const Routes = ({ store }) => (
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={(args) => <MainPage {...args} />} />
  
                    <Route path="/films">
                        <Switch>
                            <Route exact path="/films" component={ContentAreaContainer} />
                            <Route path="/films/:id" component={FilmPageContainer} />
                        </Switch>
                    </Route>

                    <Route exact path="/search(/)" component={(args) => <MainPage {...args} />} />

                    <Route path="*" component={NotFound} />
                </Switch>
            </App>
        </Router>
    </Provider>
);

export default Routes;

Routes.propTypes = {
    store: PropTypes.object.isRequired
};