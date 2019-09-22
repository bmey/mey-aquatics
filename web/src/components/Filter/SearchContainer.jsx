import React from 'react';
import { withRouter } from 'react-router-dom';
import { FILTER } from '../../utility/constants';
import { isFilterApplied, getFilter } from '../../service/filter';
import Search from './Search';
import FilterContext from './FilterContext';

const SearchContainer = props => (
  <FilterContext.Consumer>
    {context => {
      const { filters, sort, ...contextActions } = context;
      const searchFilter = isFilterApplied(filters, FILTER.SEARCH)
        ? getFilter(filters, FILTER.SEARCH)
        : {};
      const searchTerm = searchFilter.value;

      return <Search {...props} searchTerm={searchTerm} {...contextActions} />;
    }}
  </FilterContext.Consumer>
);

export default withRouter(SearchContainer);
