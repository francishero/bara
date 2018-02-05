import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import {
  AuthRoute,
  ProtectedRoute,
} from '../util/route_util';

import HeaderRouter from './header/header_router';

import BusinessFormContainer from './business_form/business_form_container';
import ReviewFormContainer from './review_form/review_form_container';
import SessionFormContainer from './session_form/session_form_container';

import BusinessShowContainer from './business_show/business_show_container';
import SearchContainer from './search/search_container';
import Home from './home/home';

import FourZeroFour from './four_zero_four';

import Footer from './footer';

const App = () => (
  <div className="page-container">
    <HeaderRouter />
    <div className="body">
      <Switch>
        <ProtectedRoute
          path="/businesses/new"
          component={BusinessFormContainer}
        />
        <ProtectedRoute
          path="/businesses/:id/edit"
          component={BusinessFormContainer}
        />
        <ProtectedRoute
          path="/businesses/:business_id/reviews/new"
          component={ReviewFormContainer}
        />
        <ProtectedRoute
          path="/reviews/:id/edit"
          component={ReviewFormContainer}
        />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <Route path="/businesses/:id" component={BusinessShowContainer} />
        <Route path="/businesses" component={SearchContainer} />
        <Route exact path="/" component={Home} />
        <Route component={FourZeroFour} />
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;
