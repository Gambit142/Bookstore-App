import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Header = () => (
  <>
    <nav className="navigation-bar d-flex">
      <div className="links-bar d-flex">
        <h2>Bookstore CMS</h2>
        <ul className="d-flex">
          <li>
            <Link to="/" className="links"> BOOKS </Link>
          </li>
          <li>
            <Link to="/categories" className="links"> CATEGORIES </Link>
          </li>
        </ul>
      </div>
      <FaUserAlt />
    </nav>
  </>
);

export default Header;
