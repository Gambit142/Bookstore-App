import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BooksPage from './bookpage';
import CategoriesPage from '../redux/categories/categories';
import Header from './header';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/">
        <BooksPage />
      </Route>
      <Route exact path="/categories">
        <CategoriesPage />
      </Route>
    </Switch>
  </>
);

export default App;
