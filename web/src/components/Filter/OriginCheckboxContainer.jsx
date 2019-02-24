import React from 'react';
import FilterContext from './FilterContext';
import OriginCheckbox from './OriginCheckbox';

const Container = props => (
  <FilterContext.Consumer>
    {({ filters, sort, changeSort, ...rest }) => <OriginCheckbox {...props} {...rest} />}
  </FilterContext.Consumer>
);

export default Container;
