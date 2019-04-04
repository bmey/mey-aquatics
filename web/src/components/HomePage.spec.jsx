import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

describe('<HomePage />', () => {
  it('does not render hot item link when fish model not found', () => {
    const notFoundId = 'not-found-id';

    const subject = shallow(<HomePage data={{ fish: [], hotItems: [notFoundId] }} />);

    expect(subject.find(`[data-test='view-hot-${notFoundId}']`)).toHaveLength(0);
  });

  it('renders hot item links when model id matches', () => {
    const foundId = 'found-id';

    const subject = shallow(
      <HomePage data={{ fish: [{ id: foundId, common: 'common name' }], hotItems: [foundId] }} />
    );

    const itemLink = subject.find(`[data-test='view-hot-${foundId}']`);
    expect(itemLink).toHaveLength(1);
    expect(itemLink.prop('children')).toEqual('common name');
  });

  it('renders hot item links when model id matches but case is different', () => {
    const foundId = 'found-id';

    const subject = shallow(
      <HomePage
        data={{ fish: [{ id: foundId.toUpperCase(), common: 'common name' }], hotItems: [foundId] }}
      />
    );

    const itemLink = subject.find(`[data-test='view-hot-${foundId}']`);
    expect(itemLink).toHaveLength(1);
    expect(itemLink.prop('children')).toEqual('common name');
  });
});
