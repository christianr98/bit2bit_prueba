import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../components/Home';
import Question from '../components/Question';

const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:idQuestion" component={Question} />
          <Route path={'*'} component={{}} />
        </Switch>
      </BrowserRouter>
    );
  };

export default Router
