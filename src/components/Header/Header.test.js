import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';


describe('Header Component', () => {
  const setup = propOverrides => {
    const props = Object.assign({
      hasSearch: true
    }, propOverrides)

    const wrapper = shallow(<Header { ...props } />)

    return {
      props,
      wrapper,
      search: wrapper.find('.search')
    }
  }

  it('renders without crashing', () => {
    const { wrapper } = setup()
    wrapper
  });

  it('when there is not search', () => {
    const { search } = setup({ hasSearch: false })
    expect(search.exists()).toBe(false)
  })

})
