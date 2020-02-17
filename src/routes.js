import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './views/Main';
import List from './views/List';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route pah="/" exact component={Main} />
        <Route pah="/list" component={List} />
      </Switch>
    </BrowserRouter>
  );
}
