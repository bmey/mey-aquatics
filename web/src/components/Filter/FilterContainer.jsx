import React from "react";
import { connect } from "react-redux";
import { applyFilter, removeFilter, changeSort } from "../../redux/filterActions";
import sortOptions from "./sortOptions";
import mapStateToOrigins from "../../service/origins";
import Filter from "./Filter";

const FilterContainer = props => <Filter {...props} sortOptions={sortOptions} />;

const mapStateToProps = state => ({
  appliedFilters: state.appliedFilters,
  appliedSortId: state.appliedSort.id,
  originOptions: mapStateToOrigins(state.appliedFilters),
});

export default connect(
  mapStateToProps,
  { applyFilter, removeFilter, changeSort }
)(FilterContainer);
