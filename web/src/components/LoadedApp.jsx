import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CloudinaryContext } from 'cloudinary-react';
import Footer from './Footer';
import Nav from './Nav/Nav';
import Home from './HomePage';
import LivestockPage from './LivestockPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ScrollToTop from './ScrollToTop';

const routes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    showInNav: true,
    component: Home,
  },
  {
    path: '/livestock/',
    name: 'Live Stock',
    showInNav: true,
    component: LivestockPage,
  },
  { path: '/about/', name: 'About', showInNav: true, component: AboutPage },
  { path: '/contact/', name: 'Contact', showInNav: true, component: ContactPage },
];

const LoadedApp = ({ data }) => (
  <CloudinaryContext cloudName='bmey'>
    <Router>
      <ScrollToTop>
        <div className='body-container'>
          <div className='body-content' data-test='loaded'>
            <Nav />

            <Route path='/' exact render={() => <Home data={data} />} />
            <Route path='/livestock/' render={props => <LivestockPage {...props} data={data} />} />
            <Route path='/about/' render={() => <AboutPage data={data} />} />
            <Route path='/contact/' render={() => <ContactPage data={data} />} />
          </div>
          <Footer routes={routes} />
        </div>
      </ScrollToTop>
    </Router>
  </CloudinaryContext>
);

export default LoadedApp;
