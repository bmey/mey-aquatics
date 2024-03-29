import React, { Component } from 'react'
import Link from 'next/link'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav as BootstrapNav,
  NavItem,
} from 'reactstrap'
import Logo from './Logo/Logo'

export default class Nav extends Component {
  state = {
    collapsed: true,
  }

  toggleNavbar(): void {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  closeNavbar(): void {
    this.setState({
      collapsed: true,
    })
  }

  render(): JSX.Element {
    const { collapsed } = this.state
    const routes = [
      {
        path: '/',
        test: 'nav-home',
        text: 'Home',
        exact: true,
      },
      {
        path: '/stock/',
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
    ]
    return (
      <>
        <Navbar color="light" light expand="sm" className="fixed-top-sm">
          <Link href="/">
            <a
              className="navbar-brand mr-auto d-flex"
              onClick={() => this.closeNavbar()}
            >
              <Logo />
              {`Mey's Aquatics`}
            </a>
          </Link>
          <NavbarToggler
            onClick={() => this.toggleNavbar()}
            data-test="mobile-nav"
          >
            Menu
          </NavbarToggler>
          <Collapse isOpen={!collapsed} navbar className="justify-content-end">
            <BootstrapNav navbar className="text-right">
              {routes.map((route) => (
                <NavItem onClick={() => this.closeNavbar()} key={route.path}>
                  <Link href={route.path}>
                    <a className="nav-link" data-test={route.test}>
                      {route.text}
                    </a>
                  </Link>
                </NavItem>
              ))}
            </BootstrapNav>
          </Collapse>
        </Navbar>
        <div className="fixed-top-sm-spacer" />
      </>
    )
  }
}
