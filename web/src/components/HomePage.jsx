import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { IoMdGlobe, IoIosFlame, IoIosWarning } from 'react-icons/io';
import ContactButton from './ContactButton/ContactButton';
import Logo from './Logo/Logo';
import { getRouteFromOrigin, getRouteFromFilter } from './Filter/filters';
import { countEndangeredSpecies } from '../service/stats';
import './HomePage.css';
import { FILTER } from '../utility/constants';

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

const Home = ({ data: { fish, hotItems = [] } }) => (
  <div data-cy='homepage'>
    <header className='homepage-header'>
      <div className='logo-container'>
        <Logo className='logo' />
      </div>
      <div className='homepage-header-text'>
        <h1 className='App-title'>Mey's Aquatics</h1>
        <span className='App-subtext text-right mt-1'>Caring for fish since 1970</span>
        <Link to='/livestock/'>
          <Button color='primary'>Browse our stock</Button>
        </Link>
      </div>
    </header>
    <div className='home-content'>
      <div className='home-card-container'>
        <HomeCard icon={<IoMdGlobe />} description='Worldwide'>
          <div className='d-flex flex-column align-items-center worldwide'>
            <span className='text-center subtext'>
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
        <HomeCard
          icon={<IoIosFlame className='color-primary' />}
          description="What's Hot"
          className='priority-item'
        >
          <div className='d-flex flex-column align-items-center worldwide'>
            <span className='text-center subtext'>Check out our most popular and rare items!</span>
            {hotItems.map(id => {
              const upperCaseId = id.toUpperCase();
              const itemModel = fish.find(item => item.id.toUpperCase() === upperCaseId);
              if (!itemModel) {
                return null;
              }

              return (
                <Link to={`/livestock/${id}`} data-test={`view-hot-${id}`} key={id}>
                  {itemModel.common}
                </Link>
              );
            })}
          </div>
        </HomeCard>
        <HomeCard icon={<IoIosWarning />} description='Endangered'>
          <div className='d-flex flex-column align-items-center'>
            <span className='text-center subtext'>
              We have <span className="font-weight-bold">{countEndangeredSpecies(fish)}&nbsp;endangered</span> species in
              stock. Pick one up so you can make a difference, too!
            </span>
            <Link
              to={`/livestock/#${getRouteFromFilter(FILTER.CARES_LIST)}`}
              data-test='view-endangered'
            >
              View now
            </Link>
          </div>
        </HomeCard>
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center bg-gray p-5'>
        <h2 className="mb-4">Contact Us</h2>

        <p className='text-center mb-4' style={{ maxWidth: '40rem' }}>
          We have a wide selection of fish, including rare and endangered species identified by the
          CARES Fish Preservation Program. Please contact us if you are interested in buying,
          trading, or to learning about what we do.
        </p>

        <ContactButton />
      </div>
    </div>
  </div>
);

const HomeCard = ({ icon, description, children, className = '' }) => (
  <div className={`home-card ${className}`}>
    <div className='d-flex flex-column align-items-center'>
      <div style={{ fontSize: '3rem' }}>{icon}</div>
      <strong className='description'>{description}</strong>
    </div>
    {children}
  </div>
);

export default Home;
