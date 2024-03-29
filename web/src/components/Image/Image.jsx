import React from 'react';
import { Image as CloudinaryImage, Transformation } from 'cloudinary-react';

const Image = props => {
  if (process.env.NODE_ENV === 'production' || /true/i.test(process.env.REACT_APP_USE_CLOUDINARY)) {
    return (
      <CloudinaryImage {...props} width='500'>
        <Transformation overlay='logo-black,w_0.3,o_15,fl_relative' />
      </CloudinaryImage>
    );
  } else {
    return <img src={`${window.location.origin}/fish.webp`} alt='' width='500' />;
  }
};

export default Image;
