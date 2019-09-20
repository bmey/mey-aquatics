import React from 'react';
import FishList from './Livestock/ProductListContainer';
import Filter from './Filter/FilterContainer';
import SearchContainer from './Filter/SearchContainer';
import ResultsContainer from './Filter/ResultsContainer';
import { FilterProvider } from './Filter/FilterContext';
import './LivestockPage.css';

const LivestockPage = props => (
  <FilterProvider>
    <div data-cy='livestockpage'>
      <h1 className='a11y-offscreen'>Live Stock</h1>
      <div className='livestock-list-page'>
        <div className='search'>
          <SearchContainer />
        </div>
        {props.data && <>
          <div className='results'>
            <ResultsContainer {...props.data} />
          </div>
          <div className='filter'>
            <Filter />
          </div>
          <div className='data'>
            <FishList {...props.data} />
          </div>
        </>}
      </div>
    </div>
  </FilterProvider>
);

export default LivestockPage;
