import React from 'react';
import { withRouter } from 'react-router';
import { Button } from 'reactstrap';
import ProductDetails from './Livestock/ProductDetails';

const LivestockDetailsPage = ({ data, match, history }) => {
  const { itemId } = match.params;
  let model = data.fish.find(item => item.id.toUpperCase() === itemId.toUpperCase());

  return (
    <div className='App-content container'>
      <div>
        <Button onClick={history.goBack} size='sm' outline color='secondary'>
          &lt; Go Back
        </Button>
      </div>
      <div style={{ marginTop: '20px' }}>
        {model ? <ProductDetails {...model} /> : 'Item not found'}
      </div>
    </div>
  );
};

export default withRouter(LivestockDetailsPage);
