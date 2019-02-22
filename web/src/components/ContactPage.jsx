import React from 'react';
import { IoLogoInstagram, IoLogoYoutube } from 'react-icons/io';
import ContactButton from './ContactButton/ContactButton';
import './ContactPage.css';

const ContactPage = () => (
  <div data-cy='contactpage'>
    <header className='App-header'>
      <h1 className='App-title'>Contact</h1>
    </header>
    <div className='App-content'>
      <p>
        <strong>We would love to hear from you!</strong>
      </p>
      <p>Feel free to reach out for any reason at all. Some common things others contact us for:</p>
      <ul>
        <li>Buy</li>
        <li>Trade</li>
        <li>Question about an item</li>
      </ul>
      <hr />
      <div className='d-flex justify-content-around contact-content'>
        <div className='d-flex flex-column align-items-center'>
          <h3 className='text-center'>Email</h3>
          <ContactButton isPrimary />
        </div>
        <div>
          <h3 className='text-center'>Social Media</h3>
          <div className='d-flex justify-content-center contact-social'>
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
