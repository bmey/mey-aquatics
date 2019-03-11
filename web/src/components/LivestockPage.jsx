import React from 'react';
import FishList from './Livestock/ProductListContainer';
import Filter from './Filter/FilterContainer';
import { FilterProvider } from './Filter/FilterContext';
import './LivestockPage.css';

const LivestockPage = props => (
  <FilterProvider>
    <div data-cy='livestockpage'>
      <header className='App-header'>
        <h1 className='App-title'>Live Stock</h1>
      </header>
      <div className='App-content livestock-list-page'>
        <Filter />
        {props.data && <FishList {...props.data} />}
      </div>
    </div>
  </FilterProvider>
);

export default LivestockPage;
