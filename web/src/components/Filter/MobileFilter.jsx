import React from 'react';
import { Button } from 'reactstrap';
import Filter from './FilterContainer';
import ResultsContainer from './ResultsContainer';
import './MobileFilter.css';

const MobileFilter = props =>
  props.data && (
    <div className='mobile-filter-wrapper'>
      <div className='mobile-filter-header'>
        <ResultsContainer {...props.data} />
        <Button
          onClick={props.history.goBack}
          type='button'
          outline
          color='secondary'
          data-test='go-back'
        >
          &lt; Go Back
        </Button>
      </div>
      <div className='mobile-filter-body'>
        <Filter />
      </div>
    </div>
  );

export default MobileFilter;
