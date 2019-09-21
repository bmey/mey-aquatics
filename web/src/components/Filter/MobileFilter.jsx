import React from 'react';
import { ButtonDropdown, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import Filter from './Filter';
import './MobileFilter.css';

class MobileFilter extends React.Component {
  state = {
    popoverOpen: false,
  };

  toggle = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  };

  render() {
    return (
      <div className='d-flex justify-content-end'>
        <ButtonDropdown id='filter-button' onClick={this.toggle} data-test='filter-button'>
          Filter
        </ButtonDropdown>
        <Popover
          placement='bottom'
          isOpen={this.state.popoverOpen}
          target='filter-button'
          toggle={this.toggle}
        >
          <PopoverHeader>Filter by</PopoverHeader>
          <PopoverBody>
            <div className='filter-wrapper'>
              <Filter {...this.props} />
            </div>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default MobileFilter;
