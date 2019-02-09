import React from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import Filter from "./Filter";
import "./MobileFilter.css";

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
      <div className="d-flex justify-content-end">
        <Button id="filter-button" type="button" onClick={this.toggle}>
          Filter
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="filter-button" toggle={this.toggle}>
          <PopoverHeader>Filter by</PopoverHeader>
          <PopoverBody>
            <div className="filter-wrapper">
              <Filter {...this.props} />
            </div>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default MobileFilter;
