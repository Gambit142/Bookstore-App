import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/configureStore';
import './index.css';

ReactDOM.render(
  <Router>
    <Provider bookStore={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
