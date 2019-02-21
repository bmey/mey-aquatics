import React from 'react';
import { Image as CloudinaryImage } from 'cloudinary-react';

const Image = props => {
  if (process.env.NODE_ENV === 'production' || /true/i.test(process.env.REACT_APP_USE_CLOUDINARY)) {
    return <CloudinaryImage {...props} />;
  } else {
    return <img src={`${window.location.origin}/fish.webp`} alt='' />;
  }
};

export default Image;
