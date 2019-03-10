import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ routes }) => (
  <footer className='body-footer bg-dark navbar-dark'>
    Sitemap
    <nav className='d-flex flex-column navbar-nav'>
      {routes
        .filter(route => route.showInNav)
        .map(route => (
          <Link className='nav-link' to={route.path} key={route.path}>
            {route.name}
          </Link>
        ))}
    </nav>
    <br />
    <nav className='navbar-nav navbar-legal'>
      <a className='nav-link' href='/termsofuse.html'>
        Terms of Use
      </a>
      <a className='nav-link' href='/privacy.html'>
        Privacy
      </a>
      <span>&copy;&nbsp;2019, MeysAquatics.com, LLC, or its affiliates</span>
    </nav>
  </footer>
);

export default Footer;
