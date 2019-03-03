import React from 'react';
import { UncontrolledButtonDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { isFilterApplied } from '../../service/filter';
import { FILTER } from '../../utility/constants';
import OriginCheckbox from './OriginCheckbox';

const Filter = ({
  appliedFilters,
  applyFilter,
  removeFilter,
  changeSort,
  appliedSortId,
  sortOptions = [],
  originOptions = [],
}) => {
  const isEndangeredChecked = isFilterApplied(appliedFilters, FILTER.CARES_LIST);
  return (
    <div>
      <div>Sort by</div>
      <UncontrolledButtonDropdown setActiveFromChild>
        <DropdownToggle caret data-test='sort-dropdown'>
          {sortOptions.filter(option => option.id === appliedSortId).map(option => option.name)}
        </DropdownToggle>
        <DropdownMenu data-test='sort-dropdown-menu'>
          {sortOptions.map(option => {
            const isActive = option.id === appliedSortId;
            return (
              <DropdownItem
                active={isActive}
                key={option.id}
                data-test={`sort-option-${option.id}`}
                onClick={() => changeSort(option.id)}
              >
                {option.name}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </UncontrolledButtonDropdown>

      <div>Filter by</div>
      <ul>
        <li>
          <div>Endangered</div>
          <div>
            <label htmlFor='endangered'>
              <input
                name='endangered'
                id='endangered'
                type='checkbox'
                checked={isEndangeredChecked}
                data-test='filter-endangered'
                readOnly
                onClick={() =>
                  isEndangeredChecked
                    ? removeFilter({ type: FILTER.CARES_LIST })
                    : applyFilter({ type: FILTER.CARES_LIST })
                }
              />
              &nbsp; On C.A.R.E.S. List
            </label>
          </div>
        </li>

        <li>
          <div>Place of origin</div>
          {originOptions.map(origin => {
            const { subOrigins, ...rest } = origin;
            const filterActions = { applyFilter, removeFilter };

            return (
              <div key={origin.id}>
                <OriginCheckbox
                  {...rest}
                  {...filterActions}
                  data-test={`filter-origin-${origin.id}`}
                />

                {subOrigins.map(subOrigin => {
                  return (
                    <div key={subOrigin.id} style={{ paddingLeft: '20px' }}>
                      <OriginCheckbox
                        {...subOrigin}
                        {...filterActions}
                        data-test={`filter-origin-${subOrigin.id}`}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default Filter;
