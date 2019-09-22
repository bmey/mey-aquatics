import React from 'react';
import { UncontrolledButtonDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { isFilterApplied } from '../../service/filter';
import { FILTER } from '../../utility/constants';
import OriginCheckbox from './OriginCheckbox';
import Checkbox from './Checkbox';

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
      <div>
        <strong>Sort by</strong>
      </div>
      <UncontrolledButtonDropdown setActiveFromChild outline>
        <DropdownToggle caret data-test='sort-dropdown' outline>
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

      <div style={{ marginTop: '20px' }}>
        <strong>Filter by</strong>
      </div>
      <ul
        style={{
          margin: '0 0 0 10px',
          padding: 0,
          listStyleType: 'none',
        }}
      >
        <li>
          <strong>Endangered</strong>
          <div>
            <Checkbox
              id='endangered'
              checked={isEndangeredChecked}
              data-test='filter-endangered'
              onClick={() =>
                isEndangeredChecked
                  ? removeFilter({ type: FILTER.CARES_LIST })
                  : applyFilter({ type: FILTER.CARES_LIST })
              }
            >
              On C.A.R.E.S. List
            </Checkbox>
          </div>
        </li>

        <li>
          <strong>Place of origin</strong>
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
                    <OriginCheckbox
                      {...subOrigin}
                      {...filterActions}
                      key={subOrigin.id}
                      data-test={`filter-origin-${subOrigin.id}`}
                      style={{ marginLeft: '20px' }}
                    />
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
