import React from 'react';
import { Button, FormGroup, Label, InputGroup, Input, InputGroupAddon } from 'reactstrap';
import { FILTER } from '../../utility/constants';
import { isEmpty } from '../../utility/strings';

const id = "search-input";
class Search extends React.Component {
  state = {
    value: this.props.searchTerm || "",
  }

  onChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  onKeyUp = (event) => {
    if (event.key === 'Enter') {
      this.onSubmit();
    }
  }

  onSubmit = () => {
    const { applyFilter, removeFilter } = this.props;
    const searchTerm = this.state.value;

    if (isEmpty(searchTerm)) {
      removeFilter({ type: FILTER.SEARCH });
    } else if (this.props.searchTerm !== searchTerm) {
      applyFilter({ type: FILTER.SEARCH, value: searchTerm });
    }
  }

  render() {
    return (
      <FormGroup>
        <Label for={id} className="a11y-offscreen">Search</Label>
        <InputGroup>
          <Input
            name={id}
            id={id}
            type='text'
            data-test={id}
            value={this.state.value}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          />
          <InputGroupAddon addonType="append">
            <Button id="search-submit" data-test="search-submit" color="secondary" onClick={this.onSubmit}>Search</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    );
  }
}

export default Search;
