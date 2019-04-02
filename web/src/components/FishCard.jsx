import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import ButtonLink from './ButtonLink/ButtonLink';
import Image from './Image/Image';
import MissingImage from './MissingImage';

const FishCard = ({ id, common, scientific, origin, picture, match }) => {
  return (
    <ButtonLink to={`${match.url}${id}`} className='button-card' data-test={`livestock-item-${id}`}>
      <div className='d-flex justify-content-center card-thumbnail'>
        {picture ? (
          <Image
            publicId={picture}
            dpr='auto'
            responsive
            aspectRatio='16:9'
            fetchFormat='auto'
            quality='auto:low'
            secure='true'
            crop='fill'
            alt=''
          />
        ) : (
          <MissingImage />
        )}
      </div>
      <div className='card-body-wrapper'>
        <div className='text-normal card-body-text'>
          <div>{common}</div>
          <div>
            <em>{scientific}</em>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <small className='text-muted'>{origin}</small>
          <Link to={`${match.url}${id}`} tabIndex={-1}>
            See details
          </Link>
        </div>
      </div>
    </ButtonLink>
  );
};

export default withRouter(FishCard);
