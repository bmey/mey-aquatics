import React from 'react';
import { shallow } from 'enzyme';
import { FILTER } from '../../utility/constants';
import OriginCheckbox from './OriginCheckbox';

describe('<OriginCheckbox />', () => {
  const id = 'test';
  const commonProps = {
    id,
    name: 'test origin',
    checked: false,
    hasSubLocations: false,
    applyFilter: () => {},
    removeFilter: () => {},
  };

  it('renders unchecked input when checked prop is false', () => {
    const wrapper = shallow(<OriginCheckbox {...commonProps} checked={false} />);

    const subject = wrapper.find(`[data-test='filter-origin-${id}']`);

    expect(subject.prop('checked')).toBe(false);
  });

  it('renders checked input when checked prop is true', () => {
    const wrapper = shallow(<OriginCheckbox {...commonProps} checked />);

    const subject = wrapper.find(`[data-test='filter-origin-${id}']`);

    expect(subject.prop('checked')).toBe(true);
  });

  it('renders name text from name prop', () => {
    const expectedName = 'test name';
    const wrapper = shallow(<OriginCheckbox {...commonProps} name={expectedName} />);

    const subject = wrapper.find("[data-test='origin-name']");

    expect(subject.text()).toContain(expectedName);
  });

  it.each(['id1', 'id2'])('removes filter when clicked and is checked', originId => {
    const applyFilter = jest.fn();
    const removeFilter = jest.fn();

    const wrapper = shallow(
      <OriginCheckbox
        {...commonProps}
        id={originId}
        checked
        applyFilter={applyFilter}
        removeFilter={removeFilter}
      />
    );
    const subject = wrapper.find(`[data-test='filter-origin-${originId}']`);
    subject.simulate('click');

    expect(removeFilter).toBeCalledWith({
      type: FILTER.ORIGIN,
      id: originId,
      hasSubLocations: false,
    });
    expect(applyFilter).not.toBeCalled();
  });

  it.each(['id1', 'id2'])('applies filter when clicked and is unchecked', originId => {
    const applyFilter = jest.fn();
    const removeFilter = jest.fn();

    const wrapper = shallow(
      <OriginCheckbox
        {...commonProps}
        id={originId}
        checked={false}
        applyFilter={applyFilter}
        removeFilter={removeFilter}
      />
    );
    const subject = wrapper.find(`[data-test='filter-origin-${originId}']`);
    subject.simulate('click');

    expect(applyFilter).toBeCalledWith({
      type: FILTER.ORIGIN,
      id: originId,
      hasSubLocations: false,
    });
    expect(removeFilter).not.toBeCalled();
  });

  it('removes filter with sublocations when clicked and is checked', () => {
    const applyFilter = jest.fn();
    const removeFilter = jest.fn();
    const originId = 'parent-origin';

    const wrapper = shallow(
      <OriginCheckbox
        {...commonProps}
        id={originId}
        checked
        hasSubLocations
        applyFilter={applyFilter}
        removeFilter={removeFilter}
      />
    );
    const subject = wrapper.find(`[data-test='filter-origin-${originId}']`);
    subject.simulate('click');

    expect(removeFilter).toBeCalledWith({
      type: FILTER.ORIGIN,
      id: originId,
      hasSubLocations: true,
    });
    expect(applyFilter).not.toBeCalled();
  });

  it('applies filter with sublocations when clicked and is unchecked', () => {
    const applyFilter = jest.fn();
    const removeFilter = jest.fn();
    const originId = 'parent-origin';

    const wrapper = shallow(
      <OriginCheckbox
        {...commonProps}
        id={originId}
        checked={false}
        hasSubLocations
        applyFilter={applyFilter}
        removeFilter={removeFilter}
      />
    );
    const subject = wrapper.find(`[data-test='filter-origin-${originId}']`);
    subject.simulate('click');

    expect(applyFilter).toBeCalledWith({
      type: FILTER.ORIGIN,
      id: originId,
      hasSubLocations: true,
    });
    expect(removeFilter).not.toBeCalled();
  });
});
