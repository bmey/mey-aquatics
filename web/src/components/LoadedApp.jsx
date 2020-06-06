import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CloudinaryContext } from 'cloudinary-react';
import Footer from './Footer';
import Nav from './Nav/Nav';
import Home from './HomePage';
import LivestockPage from './LivestockPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import { CSSTransition } from 'react-transition-group'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const routes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    showInNav: true,
    Component: Home,
  },
  {
    path: '/livestock/',
    name: 'Live Stock',
    showInNav: true,
    Component: LivestockPage,
  },
  { path: '/about/', name: 'About', showInNav: true, Component: AboutPage },
  { path: '/contact/', name: 'Contact', showInNav: true, Component: ContactPage },
];

const LoadedApp = ({ data }) => (
  <CloudinaryContext cloudName='bmey' key='loaded-app'>
    <Router>
      <div className='body-container page-container'>
        <Nav />
        {routes.map(({ path, exact, Component }) => (
          <Route key={path} exact={exact} path={path}>
            {({ match, ...rest }) => (
              <CSSTransition
                in={match != null}
                timeout={2000}
                classNames="page"
                unmountOnExit
                data-test='loaded'
              >
                {(childProps) => {
                  console.log('render csstransition child', childProps)
                  return (<><Component className={`body-content page`} data={data} {...rest} match={match} />
                    <div className={`filler-${childProps}`} style={{ flex: 'grow', minHeight: '100%' }}></div>
                  </>)
                }
                }
              </CSSTransition>
            )}
          </Route>
        ))}
        <Footer routes={routes} />
      </div>
    </Router>
  </CloudinaryContext>
);

// const withTransition = (children) => (
//   <ReactCSSTransitionGroup
//     transitionName="example"
//     transitionEnterTimeout={1000}
//     transitionLeaveTimeout={1000}
//     transitionEnter={true}
//     transitionLeave={true}
//     transitionAppear={true}
//     transitionAppearTimeout={500}
//   >
//     {children}
//   </ReactCSSTransitionGroup>
// )

export default LoadedApp;
