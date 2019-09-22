import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Media from 'react-media';
import FishList from './ProductListContainer';
import Filter from '../Filter/FilterContainer';
import ResultsContainer from '../Filter/ResultsContainer';
import './DefaultListPage.css';

const DefaultListPage = props =>
  props.data && (
    <div className='livestock-list-page'>
      <div className='results'>
        <ResultsContainer {...props.data} />
      </div>
      <div className='filter'>
        <Media query='(max-width: 767.98px)'>
          {matches =>
            matches ? (
              <div className='d-flex justify-content-end'>
                <Link to='/livestock/filter'>
                  <Button id='filter-button' type='button' outline data-test='filter-button'>
                    Filter
                  </Button>
                </Link>
              </div>
            ) : (
              <Filter />
            )
          }
        </Media>
      </div>
      <div className='data'>
        <FishList {...props.data} />
      </div>
    </div>
  );

export default DefaultListPage;
