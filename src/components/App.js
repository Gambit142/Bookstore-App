import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BooksPage from './bookpage';
import CategoriesPage from '../redux/categories/categories';
import Header from './header';

const App = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <BooksPage />
        </Route>
        <Route path="/categories">
          <CategoriesPage />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
