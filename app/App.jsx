import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import { Provider } from 'react-redux';
import AppStore from './store/store';
import './css/globalStyle.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Landing from './components/Landing/Landing';
import Search from './components/Search/Search';
import TabNavigation from './components/TabNavigation/TabNavigation';
import NotFound from './components/NotFound/NotFound';
import Navigation from './components/common/Navigation/Navigation';

const store = AppStore();

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/search" component={Search} />
          <Route path="/tab-navigation" component={TabNavigation} />
          <Route path="/app-home" component={Navigation} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

export default App;
