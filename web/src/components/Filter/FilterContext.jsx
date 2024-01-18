import React, { Component } from 'react';
import _ from 'lodash';
import queryString from 'query-string';
import { withRouter } from 'react-router';
import { applyFilter, removeFilter } from './filters';
import { FILTER, SORT_BY } from '../../utility/constants';

const initialSortId = SORT_BY.DEFAULT;
const FilterContext = React.createContext();

const getInitialState = ({ location: { hash } }) => {
  let filters = [{ type: FILTER.IN_STOCK }];
  let sort = initialSortId;
  if (!_.isEmpty(hash)) {
    try {
      const result = queryString.parse(hash);
      filters = JSON.parse(result.filter);
      sort = +_.get(result, 'sort', initialSortId);
    } catch (e) {
      console.log(e);
    }
  }

  return {
    filters: filters,
    sort,
  };
};

class Provider extends Component {
  state = getInitialState(this.props);

  handleApplyFilter = payload => {
    const newFilters = applyFilter(this.state.filters, { payload });
    this.setState({ filters: newFilters });
  };

  handleRemoveFilter = payload => {
    const newFilters = removeFilter(this.state.filters, { payload });
    this.setState({ filters: newFilters });
  };

  handleChangeSort = sortId => {
    this.setState({ sort: sortId });
  };

  render() {
    const _this = this;

    return (
      <FilterContext.Provider
        value={{
          ...this.state,
          applyFilter: _this.handleApplyFilter,
          removeFilter: _this.handleRemoveFilter,
          changeSort: _this.handleChangeSort,
        }}
      >
        {this.props.children}
      </FilterContext.Provider>
    );
  }
}

export const FilterProvider = withRouter(Provider);
export default FilterContext;
