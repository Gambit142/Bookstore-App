import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <>
    <nav>
      <h2>Bookstore CMS</h2>
      <ul>
        <li>
          <Link to="/" exact> BOOKS </Link>
        </li>
        <li>
          <Link to="/categories"> CATEGORIES </Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Header;
