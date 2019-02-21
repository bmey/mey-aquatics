import React from 'react';
import DefaultFishIcon from './DefaultFishIcon';
import './MissingImage.css';

export default () => (
  <div className='d-flex justify-content-center align-items-center img-missing-text'>
    <DefaultFishIcon width={75} height={75} fill={'#ddd'} />
  </div>
);
