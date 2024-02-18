import React from 'react';
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io';
import ContactButton from './ContactButton/ContactButton';
import './ContactPage.css';

const ContactPage = () => (
  <div data-cy='contactpage'>
    <header className='App-header'>
      <h1 className='App-title'>Contact</h1>
    </header>
    <div className='App-content container'>
      <div className='px-sm-3 px-md-5 pt-sm-3 pt-md-5'>
        <p className='mb-4 h3'>We would love to hear from you!</p>
        <p>
          Feel free to reach out for any reason at all. Some common things others contact us for:
        </p>
        <ul className='mt-4'>
          <li>Buy</li>
          <li>Trade</li>
          <li>Question about an item</li>
        </ul>
      </div>
      <hr className='my-sm-3 my-md-5' />
      <div className='d-flex justify-content-around contact-content px-sm-3 px-md-5 pb-sm-3 pb-md-5'>
        <div className='d-flex flex-column align-items-center'>
          <h3 className='text-center mb-3'>Email</h3>
          <ContactButton isPrimary />
        </div>
        <div>
          <h3 className='text-center mb-3'>Social Media</h3>
          <div className='d-flex justify-content-center contact-social'>
            <a
              href='https://www.facebook.com/Meys-Aquatics-LLC-163514463696339/'
              className='d-flex flex-column align-items-center'
            >
              <IoLogoFacebook style={{ fontSize: '2rem', color: '#4267B2' }} />
              &nbsp;Facebook
            </a>
            <a
              href='https://www.instagram.com/mey_aquatics/'
              className='d-flex flex-column align-items-center'
            >
              <IoLogoInstagram style={{ fontSize: '2rem', color: '#111' }} />
              &nbsp;Instagram
            </a>
            <a
              href='https://www.youtube.com/channel/UCHz4QnaCjtgRpn5Zzei4ejw/'
              className='d-flex flex-column align-items-center'
            >
              <IoLogoYoutube style={{ fontSize: '2rem', color: 'red' }} />
              &nbsp;YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;
