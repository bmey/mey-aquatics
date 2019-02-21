import React from 'react';
import { Button } from 'reactstrap';

const ErrorPage = () => (
  <div data-test='error' data-cy='error'>
    <header className='App-header'>
      <div>
        <h1 className='App-title'>Mey's Aquatics</h1>
        <div className='text-center'>
          <em>Caring for fish since 1970</em>
        </div>
      </div>
    </header>
    <div className='App-content text-center'>
      <h2 style={{ margin: '30px' }}>Oh no! Something went wrong!</h2>
      <div>
        <Button
          color='primary'
          size='lg'
          onClick={() => window.location.reload()}
          data-test='refresh'
        >
          Refresh and try again
        </Button>
      </div>
    </div>
  </div>
);

export default ErrorPage;
