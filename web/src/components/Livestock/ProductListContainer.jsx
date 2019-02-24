import React from 'react';
import FilterContext from '../Filter/FilterContext';
import FishList from '../FishList';

const ProductListContainer = props => {
  return (
    <FilterContext.Consumer>
      {({ filters, sort }) => <FishList {...props} appliedFilters={filters} appliedSortId={sort} />}
    </FilterContext.Consumer>
  );
};

export default ProductListContainer;
