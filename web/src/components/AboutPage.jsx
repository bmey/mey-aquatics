import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import AboutUsHeroImage from './Image/AboutUsHeroImage';
import './AboutPage.css';

const AboutPage = () => (
  <div data-cy='aboutpage' className='about-page'>
    <header className='App-header'>
      <h1 className='App-title'>About Us</h1>
    </header>
    <div className='App-content container'>
      <div className='img-hero'>
        <AboutUsHeroImage
          publicId={'about_us/about_us.jpg'}
          dpr='auto'
          responsive
          fetchFormat='auto'
          quality='auto:low'
          secure='true'
          crop='fill'
          alt=''
        />
      </div>
      <h2>Who we are</h2>
      <p>
        We are a family business based in Newark, Delaware. We are passionate about caring for fish
        and making a difference in the world. The mastermind behind our operation, Jeff Mey, has
        been developing his love for fish and learning from the best since he was 8 years old.
      </p>

      <h2>Why we care</h2>
      <p>
        We find fish fascinating. Visiting national aquariums is a regular past-time of ours. We
        have always had fish around the household and Jeff has been involved in many aquatic
        adventures from setting up world-class fish tanks for children's hospitals to being a
        deep-diving instructor. Once we learned that there are endangered species out there and we
        could contribute, we naturally gravitated to breeding fish.
      </p>

      <h2>Affiliates</h2>
      <p>
        We are regular members of the Diamond State Aquarium Society (DSAS) and Jeff is a board
        member.
      </p>

      <h2>Want to learn more?</h2>
      <p>
        If you would like to learn more about us, please don't hesitate to contact us.
        <Link to='/contact' className='d-flex justify-content-center contact-button'>
          <Button color='primary'>See contact info</Button>
        </Link>
      </p>
    </div>
  </div>
);

export default AboutPage;
