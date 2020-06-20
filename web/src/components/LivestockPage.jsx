import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LivestockDetailsPage from './LivestockDetailsPage';
import DefaultListPage from './Livestock/DefaultListPage';
import SearchContainer from './Filter/SearchContainer';
import { FilterProvider } from './Filter/FilterContext';
import MobileFilter from './Filter/MobileFilter';
import './LivestockPage.css';

const LivestockPage = props => (
  <FilterProvider>
    <div data-cy='livestockpage' className='mb-3'>
      <h1 className='a11y-offscreen'>Live Stock</h1>
      <div className='search'>
        <SearchContainer />
      </div>

      <Switch>
        <Route exact path='/livestock/' render={() => <DefaultListPage {...props} />} />
        <Route path='/livestock/filter' render={() => <MobileFilter {...props} />} />
        <Route path='/livestock/:itemId' render={() => <LivestockDetailsPage {...props} />} />
      </Switch>
    </div>
  </FilterProvider>
);

export default LivestockPage;
