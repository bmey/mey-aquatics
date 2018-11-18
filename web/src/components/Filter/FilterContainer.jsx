import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { applyFilter, removeFilter, changeSort } from "../../redux/filterActions";
import sortOptions from "./sortOptions";
import { FILTER } from "../../utility/constants";
import mapStateToOrigins from "../../service/origin";
import Filter from "./Filter";

const FilterContainer = props => <Filter {...props} sortOptions={sortOptions} />;

const mapStateToProps = state => {
  const originFilter = state.appliedFilters.filter(f => f.type === FILTER.ORIGIN)[0];
  const originFilterValues = _.get(originFilter, "values", []);
  const originOptions = mapStateToOrigins(originFilterValues);

  return {
    appliedFilters: state.appliedFilters,
    appliedSortId: state.appliedSort.id,
    originOptions,
  };
};

export default connect(
  mapStateToProps,
  { applyFilter, removeFilter, changeSort }
)(FilterContainer);
