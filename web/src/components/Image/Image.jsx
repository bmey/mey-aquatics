import React from 'react';
import { Image as CloudinaryImage, Transformation } from 'cloudinary-react';

const Image = props => {
  if (process.env.NODE_ENV === 'production' || /true/i.test(process.env.REACT_APP_USE_CLOUDINARY)) {
    return (
      <CloudinaryImage {...props} width='500'>
        {/* <Transformation overlay={{ fontFamily: "Pacifico", fontSize: 150, text: "Mey's Aquatics" }} color="#414542" gravity="south_east" x="50" /> */}
      </CloudinaryImage>
    );
  } else {
    return <img src={`${window.location.origin}/fish.webp`} alt='' width='500' />;
  }
};

export default Image;
