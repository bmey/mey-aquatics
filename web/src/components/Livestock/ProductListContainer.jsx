import React from 'react';
import { connect } from 'react-redux';
import FishList from '../FishList';

const ProductListContainer = props => {
  return <FishList {...props} />;
};

const mapStateToProps = state => ({
  appliedFilters: state.filters,
  appliedSortId: state.appliedSort.id,
});

export default connect(mapStateToProps)(ProductListContainer);
