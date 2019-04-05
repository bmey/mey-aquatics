import React from 'react';
import { Image as CloudinaryImage } from 'cloudinary-react';

const Image = props => {
  if (process.env.NODE_ENV === 'production' || /true/i.test(process.env.REACT_APP_USE_CLOUDINARY)) {
    return <CloudinaryImage {...props} width='1500' />;
  } else {
    return <img src='/about_us.jpg' alt='' width='1500' />;
  }
};

export default Image;
