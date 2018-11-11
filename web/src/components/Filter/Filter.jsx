import React from "react";
import { isFilterApplied } from "../../service/filter";
import { FILTER } from "../../utility/constants";

const Filter = ({ appliedFilters, applyFilter }) => {
  const isEndangeredChecked = isFilterApplied(appliedFilters, FILTER.CARES_LIST);
  return (
    <div>
      Filter by
      <ul>
        <li>
          <div>Endangered</div>
          <div>
            <label
              htmlFor="endangered"
              onClick={() => (isEndangeredChecked ? {} : applyFilter({ type: FILTER.CARES_LIST }))}
            >
              <input
                name="endangered"
                type="checkbox"
                checked={isEndangeredChecked}
                data-test-filter="endangered"
                readOnly
              />
              &nbsp; On C.A.R.E.S. List
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
