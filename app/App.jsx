import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import { Provider } from 'react-redux';
import AppStore from './store/store';
import './css/globalStyle.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import Landing from './components/Landing/Landing';
import PageA from './components/PageA/PageA';
import PageB from './components/PageB/PageB';
import NotFound from './components/NotFound/NotFound';

const store = AppStore();
const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/page-a" component={PageA} />
          <Route path="/page-b" component={PageB} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

export default App;
