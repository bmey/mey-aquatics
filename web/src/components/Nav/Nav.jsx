import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav as BootstrapNav, NavItem } from 'reactstrap';
import './Nav.css';

export default class Nav extends Component {
  state = {
    collapsed: true,
  };

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  closeNavbar() {
    this.setState({
      collapsed: true,
    });
  }

  render() {
    const { collapsed } = this.state;
    const routes = [
      {
        path: '/',
        test: 'nav-home',
        text: 'Home',
        exact: true,
      },
      {
        path: '/livestock/',
        test: 'nav-livestock',
        text: 'Live Stock',
      },
      {
        path: '/about/',
        test: 'nav-about',
        text: 'About',
      },
      {
        path: '/contact/',
        test: 'nav-contact',
        text: 'Contact',
      },
    ];
    return (
      <>
        <Navbar color='dark' dark expand='sm' className='fixed-top-sm'>
          <Link to='/' className='navbar-brand mr-auto' onClick={() => this.closeNavbar()}>
            Mey's Aquatics
          </Link>
          <NavbarToggler onClick={() => this.toggleNavbar()} data-test='mobile-nav'>
            Menu
          </NavbarToggler>
          <Collapse isOpen={!collapsed} navbar className='justify-content-end'>
            <BootstrapNav navbar className='text-right'>
              {routes.map(route => (
                <NavItem onClick={() => this.closeNavbar()} key={route.path}>
                  <NavLink
                    to={route.path}
                    className='nav-link'
                    activeClassName='active'
                    exact={route.exact}
                    data-test={route.test}
                  >
                    {route.text}
                  </NavLink>
                </NavItem>
              ))}
            </BootstrapNav>
          </Collapse>
        </Navbar>
        <div className='fixed-top-sm-spacer' />
      </>
    );
  }
}
