import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { IoMdGlobe, IoIosFlame, IoIosWarning } from 'react-icons/io';
import './HomePage.css';

const Home = () => (
  <div data-cy='homepage'>
    <header className='homepage-header'>
      <div>
        <h1 className='App-title'>Welcome to Mey's Aquatics!</h1>
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
        className='d-flex justify-content-center'
        style={{ backgroundColor: '#ddd', padding: '40px' }}
      >
        Some text about us
      </div>
      <div className='d-flex flex-columns justify-content-center'>
        <HomeCard icon={<IoMdGlobe />} description='Across the world'>
          <ul>
            <li>Africa</li>
            <li>Americas</li>
            <li>Asia</li>
          </ul>
        </HomeCard>
        <HomeCard icon={<IoIosFlame style={{ color: 'red' }} />} description='Hot items!'>
          <ul>
            <li>
              <Link to='/livestock/AF-V-RG'>Ruby Green</Link>
            </li>
            <li>
              <Link to='/livestock/AM-ANGEL-ALTUM'>Altum Angelfish</Link>
            </li>
          </ul>
        </HomeCard>
        <HomeCard icon={<IoIosWarning />} description='Endangered species'>
          <div className='d-flex flex-column align-items-center'>
            <span>
              <strong>37</strong>&nbsp;species in stock
            </span>
            <Button style={{ marginTop: '20px' }}>View now</Button>
          </div>
        </HomeCard>
      </div>
    </div>
  </div>
);

const HomeCard = ({ icon, description, children }) => (
  <div className='home-card'>
    <div className='d-flex flex-column align-items-center'>
      <div style={{ fontSize: '3em' }}>{icon}</div>
      <strong style={{ margin: '10px 0', fontSize: '1.2em' }}>{description}</strong>
    </div>
    {children}
  </div>
);

export default Home;
