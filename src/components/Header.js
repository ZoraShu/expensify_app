import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <h2>Expensify Bar</h2>
    <div>
      <NavLink to="/" activeClassName="is-active" exact={true}>home page</NavLink>
    </div>
    <div>
      <NavLink to="/create" activeClassName="is-active">Create page</NavLink>
    </div>
    <div>
      <NavLink to="/edit" activeClassName="is-active">Edit page</NavLink>
    </div>
    <div>
      <NavLink to="/help" activeClassName="is-active">Help page</NavLink>
    </div>
  </header>
);

export default Header;