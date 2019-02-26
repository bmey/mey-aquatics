import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { IoMdGlobe, IoIosFlame, IoIosWarning } from 'react-icons/io';
import ContactButton from './ContactButton/ContactButton';
import { getRouteFromOrigin } from './Filter/filters';
import './HomePage.css';

const regions = [
  {
    id: 'AF',
    description: 'Africa',
  },
  {
    id: 'AM',
    description: 'Americas',
  },
  {
    id: 'SEA',
    description: 'Asia',
  },
];

const Home = () => (
  <div data-cy='homepage'>
    <header className='homepage-header'>
      <div>
        <h1 className='App-title'>Mey's Aquatics</h1>
        <div className='d-flex flex-column align-items-center'>
          <em>Caring for fish since 1970</em>
          <Link to='/livestock/' style={{ marginTop: '40px' }}>
            <Button color='primary'>Browse our stock</Button>
          </Link>
        </div>
      </div>
    </header>
    <div className='home-content'>
      <div
        className='d-flex justify-content-center text-center'
        style={{ backgroundColor: '#eee', padding: '40px' }}
      >
        We have a wide selection of fish, including rare and endangered species identified by the
        CARES Fish Preservation Program. Please contact us if you are interested in buying, trading,
        or to learning about what we do.
      </div>
      <div className='home-card-container'>
        <HomeCard icon={<IoMdGlobe />} description='Worldwide'>
          <div className='d-flex flex-column align-items-center worldwide'>
            <span className='text-center'>
              View our fish from different regions around the globe!
            </span>
            {regions.map(({ id, description }) => (
              <Link
                to={`/livestock/#${getRouteFromOrigin(id)}`}
                key={id}
                data-test={`view-region-${id}`}
              >
                {description}
              </Link>
            ))}
          </div>
        </HomeCard>
        <HomeCard icon={<IoIosFlame style={{ color: 'red' }} />} description="What's Hot">
          <div className='d-flex flex-column align-items-center worldwide'>
            <span className='text-center'>Check out our most popular and rare items!</span>
            <Link to='/livestock/AF-V-RG'>Ruby Green</Link>
            <Link to='/livestock/AM-ANGEL-ALTUM'>Altum Angelfish</Link>
          </div>
        </HomeCard>
        <HomeCard icon={<IoIosWarning />} description='Endangered'>
          <div className='d-flex flex-column align-items-center'>
            <span className='text-center'>
              We have <strong>37&nbsp;endangered</strong> species in stock. Pick one up so you can
              make a difference, too!
            </span>
            <Link to='/livestock/'>View now</Link>
          </div>
        </HomeCard>
      </div>
      <div
        className='d-flex flex-column justify-content-center text-center'
        style={{ backgroundColor: '#eee', padding: '40px' }}
      >
        <h2 style={{ marginBottom: '20px' }}>Contact Us</h2>
        <ContactButton />
      </div>
    </div>
  </div>
);

const HomeCard = ({ icon, description, children }) => (
  <div className='home-card'>
    <div className='d-flex flex-column align-items-center'>
      <div style={{ fontSize: '3em' }}>{icon}</div>
      <strong className='description'>{description}</strong>
    </div>
    {children}
  </div>
);

export default Home;
