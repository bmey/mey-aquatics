import React, { Component } from 'react';
import { applyFilter, removeFilter } from './filters';

// import { withRouter } from 'react-router';
// import queryString from 'query-string';
import { SORT_BY } from '../../utility/constants';
// import _ from 'lodash';

const FilterContext = React.createContext();

export default FilterContext;

export class FilterProvider extends Component {
  state = {
    filters: [],
    sort: SORT_BY.ALPHABETICAL_COMMON,
  };

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

// const get = ({ hash }) => {
//   let filters = [];
//   let appliedSortId = 2;
//   if (!_.isEmpty(hash)) {
//     try {
//       const result = queryString.parse(hash);
//       filters = JSON.parse(result.filter);
//       appliedSortId = +_.get(result, 'sort', 2);
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   return {
//     appliedFilters: filters,
//     appliedSortId,
//   };
// };
