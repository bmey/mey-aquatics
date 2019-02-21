import React from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';
import MissingImage from '../MissingImage';
import './ProductDetails.css';

const sizeMap = [
  {
    key: 'B',
    displayName: 'Breeders',
  },
  {
    key: 'L',
    displayName: 'Large',
  },
  {
    key: 'M',
    displayName: 'Medium',
  },
  {
    key: 'S',
    displayName: 'Small',
  },
  {
    key: 'F',
    displayName: 'Fry',
  },
];

const ProductDetails = ({ onCaresList, common, scientific, origin, sizes, picture }) => {
  return (
    <>
      <div className='product-info'>
        <div className='d-flex justify-content-center info-image'>
          {picture ? (
            <Image
              publicId={picture}
              width='auto'
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
        <h2 className='info-header'>{common || scientific}</h2>
        <div className='info-list'>
          <ul>
            <li>Common name: {common}</li>
            <li>Scientific name: {scientific}</li>
            <li>Origin: {origin}</li>
            <li>Endangered: {onCaresList ? 'Yes' : 'No'}</li>
          </ul>
          <Link to='/contact'>
            <Button color='primary' style={{ marginTop: '20px' }}>
              Contact us to buy!
            </Button>
          </Link>
        </div>
      </div>
      <h2 style={{ marginTop: '20px' }}>Stock Available</h2>
      <Table responsive>
        <thead>
          <tr>
            <th>Size</th>
            <th>Length (in)</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {sizeMap.map(sizeKey => {
            const { count, length } = sizes[sizeKey.key];
            if (count === 0) {
              return null;
            }

            return (
              <tr key={sizeKey.key}>
                <td>{sizeKey.displayName}</td>
                <td>{length ? `${length}"` : <span className='text-muted'>(unknown)</span>}</td>
                <td>{count}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <span>
        Interested in buying? <Link to='/contact'>Contact us!</Link>
      </span>
    </>
  );
};

export default ProductDetails;
