import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders loading state while fetching data', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find("[data-test='loading']").length).toEqual(1);
    expect(wrapper.find("[data-test='loaded']").length).toEqual(0);
  });

  it('renders loaded state when data is loaded', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ data: { fish: [] } });

    expect(wrapper.find("[data-test='loaded']").length).toEqual(1);
    expect(wrapper.find("[data-test='loading']").length).toEqual(0);
  });

  it('renders error state when data call fails', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ showError: true });

    expect(wrapper.find("[data-test='error']").length).toEqual(1);
    expect(wrapper.find("[data-test='loaded']").length).toEqual(0);
  });
});
