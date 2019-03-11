import React from 'react';
import { Link } from 'react-router-dom';
import { SOCIAL_MEDIA } from '../utility/constants';
import { email } from '../service/contact';

const Footer = ({ routes }) => (
  <footer className='body-footer bg-dark navbar-dark'>
    <div className='footer-content'>
      <div>
        Follow us
        <div className='d-flex flex-column navbar-nav'>
          {SOCIAL_MEDIA.map(route => (
            <a className='nav-link' href={route.href} key={route.id}>
              {route.id}
            </a>
          ))}
        </div>
      </div>
      <div>
        Contact us
        <div className='navbar-nav'>
          <a className='nav-link' href={`mailto:${email}`}>
            {email}
          </a>
        </div>
      </div>
      <div>
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
      </div>
      <div>
        Affiliates
        <div className='navbar-nav'>
          <a className='nav-link' href='https://dsas.online/'>
            DSAS
          </a>
        </div>
      </div>
    </div>
    <br />
    <p className='text-center'>Only available within continental U.S.</p>
    <nav className='navbar-nav navbar-legal'>
      <a className='nav-link' href='/termsofuse.html'>
        Terms of Use
      </a>
      <a className='nav-link' href='/privacy.html'>
        Privacy
      </a>
      <span>&copy;&nbsp;2019, MeysAquatics.com</span>
    </nav>
  </footer>
);

export default Footer;
