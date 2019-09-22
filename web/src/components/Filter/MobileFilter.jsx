import React from 'react';
import {
  Button, Popover, PopoverHeader, PopoverBody,
  UncontrolledButtonDropdown, DropdownItem, DropdownToggle, DropdownMenu
} from 'reactstrap';
//import Filter from './Filter';
import './MobileFilter.css';

//import {  } from 'reactstrap';
import { isFilterApplied } from '../../service/filter';
import { FILTER } from '../../utility/constants';
import OriginCheckbox from './OriginCheckbox';
import Checkbox from './Checkbox';

// const myOrigins = [
//   {
//     id: "AM-SAMER", name: "South America", checked: false, subOrigins: [
//       { id: "AM-SAMER", name: "South America", checked: false },
//       { id: "AM-COSTA", name: "Costa Rica", checked: false },
//       { id: "AM-CEAME", name: "Central America", checked: false },
//       { id: "AM-OTHER", name: "Other", checked: false },
//     ]
//   },

// ];

class MobileFilter extends React.Component {
  state = {
    popoverOpen: false,
  };

  toggle = () => {
    console.log(`toggle: ${this.state.popoverOpen}`);
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  };

  // click = () => {
  //   this.props.addLog(`click: ${this.state.popoverOpen}`);
  //   // this.setState({
  //   //   popoverOpen: !this.state.popoverOpen,
  //   // });
  // };

  // touch = () => {
  //   this.props.addLog(`touch: ${this.state.popoverOpen}`);
  //   // this.setState({
  //   //   popoverOpen: !this.state.popoverOpen,
  //   // });
  // };

  render() {
    console.log('renderMobile');

    const {
      appliedFilters,
      applyFilter,
      removeFilter,
      changeSort,
      appliedSortId,
      sortOptions = [],
      originOptions = [],
    } = this.props;

    const isEndangeredChecked = isFilterApplied(appliedFilters, FILTER.CARES_LIST);

    return (
      <div className='d-flex justify-content-end'>
        <Button id='filter-button' type='button' data-test='filter-button'>
          Filter
        </Button>
        <Popover
          placement='auto'
          isOpen={this.state.popoverOpen}
          target='filter-button'
          toggle={this.toggle}
          style={{ width: '300px', maxHeight: '50vh' }}
        >
          <PopoverHeader>Filter by</PopoverHeader>
          <PopoverBody>
            <div className='filter-wrapper' style={{
              height: '10000px'
            }}>
              Test
              {/* {myOrigins.map(origin => {
                return (
                  <div key={origin.id}>
                    <div>{origin.id}</div>
                    <div>
                      {origin.subOrigins.map(subOrigin => {
                        return (
                          <div key={subOrigin.id}>{subOrigin.id}</div>
                        )
                      })}
                    </div>
                  </div>
                );
              })} */}
              {/* <Filter {...this.props} /> */}

              <div>
                <div>
                  <strong>Sort by</strong>
                </div>
                {/* <UncontrolledButtonDropdown setActiveFromChild outline>
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
                </UncontrolledButtonDropdown> */}

                <div style={{ marginTop: '20px' }}>
                  <strong>Filter by</strong>
                </div>
                <ul
                  style={{
                    //margin: '0 0 0 10px',
                    padding: 0,
                    listStyleType: 'none',
                  }}
                >
                  <li>
                    <strong>Endangered</strong>
                    {/* <div>
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
                    </div> */}
                  </li>

                  <li>
                    <strong>Place of origin</strong>
                    {originOptions.map(origin => {
                      const { subOrigins, ...rest } = origin;
                      const filterActions = { applyFilter, removeFilter };

                      return (
                        <div key={origin.id}>
                          <OriginCheckbox {...rest} {...filterActions} data-test={`filter-origin-${origin.id}`} />

                          <div style={{
                            height: '500px',
                            backgroundColor: 'red'
                          }}>
                            wow++++++++++++
                            {/* {origin.subOrigins.map(subOrigin => {
                              return (
                                <span key={subOrigin.id}>{subOrigin.id}</span>
                              )
                            })} */}
                          </div>
                          {/* {subOrigins.map(subOrigin => {
                            return (
                              <OriginCheckbox
                                {...subOrigin}
                                {...filterActions}
                                key={subOrigin.id}
                                data-test={`filter-origin-${subOrigin.id}`}
                                style={{ marginLeft: '20px' }}
                              />
                            );
                          })} */}
                        </div>
                      );
                    })}
                  </li>
                </ul>
              </div>
            </div>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default MobileFilter;
