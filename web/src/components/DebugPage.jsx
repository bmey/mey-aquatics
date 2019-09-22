import React from 'react';
import { FilterProvider } from './Filter/FilterContext';
import './LivestockPage.css';

import _ from 'lodash';
import sortOptions from '../components/Filter/sortOptions';
import { FILTER } from '../utility/constants';
import mapStateToOrigins from '../service/origin';
import MobileFilter from '../components/Filter/MobileFilter';
import FilterContext from '../components/Filter/FilterContext';

let log = [];

const DebugPage = props => {
  const today = new Date();
  log.push('render');
  return (
    <FilterProvider>
      <div data-cy='livestockpage' style={{ height: '200vh', padding: '20px' }}>

        {props.data && (
          <FilterContext.Consumer>
            {context => {
              const { filters, sort, ...contextActions } = context;
              const originFilter = filters.filter(f => f.type === FILTER.ORIGIN)[0];
              const originFilterValues = _.get(originFilter, 'values', []);
              const originOptions = mapStateToOrigins(originFilterValues);
              return (
                <div>
                  <MobileFilter
                    {...props}
                    sortOptions={sortOptions}
                    originOptions={originOptions}
                    appliedSortId={sort}
                    appliedFilters={filters}
                    {...contextActions}
                  />
                </div>
              );
            }}
          </FilterContext.Consumer>
        )}

        <div>
          <div>{
            today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
          }</div>
          <h2>Renders</h2>
          {log.map((logItem, i) => <div key={`render${i}`}>{i}: {logItem}</div>)}
        </div>

      </div>
    </FilterProvider>
  );
}

export default DebugPage;
