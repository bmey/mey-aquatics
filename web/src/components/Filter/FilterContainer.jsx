import React from 'react';
import _ from 'lodash';
import Media from 'react-media';
import sortOptions from './sortOptions';
import { FILTER } from '../../utility/constants';
import mapStateToOrigins from '../../service/origin';
import Filter from './Filter';
import MobileFilter from './MobileFilter';
import FilterContext from './FilterContext';

//(xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)
const FilterContainer = props => (
  <FilterContext.Consumer>
    {context => {
      const { filters, sort, ...contextActions } = context;
      const originFilter = filters.filter(f => f.type === FILTER.ORIGIN)[0];
      const originFilterValues = _.get(originFilter, 'values', []);
      const originOptions = mapStateToOrigins(originFilterValues);

      return (
        <Media query='(max-width: 767.98px)'>
          {matches =>
            matches ? (
              <MobileFilter
                {...props}
                sortOptions={sortOptions}
                originOptions={originOptions}
                appliedSortId={sort}
                appliedFilters={filters}
                {...context}
              />
            ) : (
              <Filter
                {...props}
                sortOptions={sortOptions}
                originOptions={originOptions}
                appliedSortId={sort}
                appliedFilters={filters}
                {...contextActions}
              />
            )
          }
        </Media>
      );
    }}
  </FilterContext.Consumer>
);

export default FilterContainer;
