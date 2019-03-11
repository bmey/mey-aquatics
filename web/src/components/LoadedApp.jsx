import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CloudinaryContext } from 'cloudinary-react';
import Footer from './Footer';
import Nav from './Nav/Nav';
import Home from './HomePage';
import LivestockPage from './LivestockPage';
import LivestockDetailsPage from './LivestockDetailsPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

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
    exact: true,
    component: LivestockPage,
  },
  { path: '/livestock/:itemId', component: LivestockDetailsPage },
  { path: '/about/', name: 'About', showInNav: true, component: AboutPage },
  { path: '/contact/', name: 'Contact', showInNav: true, component: ContactPage },
];

const LoadedApp = ({ data }) => (
  <CloudinaryContext cloudName='bmey'>
    <Router>
      <div className='body-container'>
        <div className='body-content' data-test='loaded'>
          <Nav />

          <Route path='/' exact render={() => <Home data={data} />} />
          <Route path='/livestock/' exact render={() => <LivestockPage data={data} />} />
          <Route path='/livestock/:itemId' render={() => <LivestockDetailsPage data={data} />} />
          <Route path='/about/' render={() => <AboutPage data={data} />} />
          <Route path='/contact/' render={() => <ContactPage data={data} />} />
        </div>
        <Footer routes={routes} />
      </div>
    </Router>
  </CloudinaryContext>
);

export default LoadedApp;
