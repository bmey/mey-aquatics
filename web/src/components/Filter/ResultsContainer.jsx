import React from 'react';
import Media from 'react-media';
import filter from '../../service/filter';
import { FILTER } from '../../utility/constants';
import { isFilterApplied, getFilter } from '../../service/filter';
import FilterContext from './FilterContext';

const ResultsContainer = ({ fish }) => (
  <FilterContext.Consumer>
    {context => {
      const { filters } = context;
      const filteredList = filter(fish, filters);
      const searchFilter = isFilterApplied(filters, FILTER.SEARCH) ? getFilter(filters, FILTER.SEARCH) : {};
      const searchTerm = searchFilter.value;

      let fromFiltersText = "";
      if (filters.length > 1) {
        const filtersSuffix = filters.length > 2 ? "filters" : "filter";
        fromFiltersText = ` and ${filters.length - 1} other ${filtersSuffix}`;
      }

      return (
        <Media query='(min-width: 768px)'>
          {matches =>
            <span>
              <strong>
                {filteredList.length}
              </strong>&nbsp;results
              {matches && searchTerm ?
                (
                  <span>
                    &nbsp;for {`"${searchTerm}"`}{fromFiltersText}
                  </span>
                )
                : null}
            </span>
          }
        </Media>
      );
    }}
  </FilterContext.Consumer>
);

export default ResultsContainer;
