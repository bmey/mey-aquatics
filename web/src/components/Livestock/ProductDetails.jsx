import React from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { IoIosWarning } from 'react-icons/io';
import Image from '../Image/Image';
import MissingImage from '../MissingImage';
import { getOriginDisplayName } from '../../service/origin';
import './ProductDetails.css';
import { priceDisplay } from './priceDisplay';
import OutOfStock from '../OutOfStock';
import { isOutOfStock } from '../../service/filter';

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
        <div className='d-flex justify-content-center info-image position-relative'>
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
          <div className='position-absolute' style={{ left: 0, top: 0 }}>
            <OutOfStock sizes={sizes} />
          </div>
        </div>
        <h2 className='info-header'>{common || scientific}</h2>
        <div className='info-list'>
          <ul>
            <li>Common name: {common}</li>
            <li>Scientific name: {scientific}</li>
            <li>Origin: {getOriginDisplayName(origin)}</li>
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
      {isOutOfStock(sizes) && (
        <div className='warning rounded border-complementary d-flex align-items-center p-3 mb-2'>
          <IoIosWarning className='color-complementary' />
          <strong className='mx-1'>Out of Stock.</strong>&nbsp;Check back later or contact us if
          interested.
        </div>
      )}
      <Table responsive striped hover>
        <thead>
          <tr>
            <th>Size</th>
            <th>Price (each)</th>
            <th>Length (inch)</th>
            <th>In Stock</th>
          </tr>
        </thead>
        <tbody>
          {sizeMap.map(sizeKey => {
            const { count, length, price } = sizes[sizeKey.key];
            if (count === 0) {
              return null;
            }

            const formattedPrice = priceDisplay(price);

            return (
              <tr key={sizeKey.key}>
                <td>{sizeKey.displayName}</td>
                <td>
                  {formattedPrice ? formattedPrice : <span className='text-muted'>(unknown)</span>}
                </td>
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
