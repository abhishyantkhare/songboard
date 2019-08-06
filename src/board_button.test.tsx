import React from 'react'
import {shallow} from 'enzyme'
import BoardButton from './board_button'

describe("<BoardButton />", () => {
  it("clicks given on click prop", () => {
    const title = "";
    const mockClick = jest.fn()
    const wrapper = shallow(<BoardButton title={title} onClick={mockClick}/>);
    wrapper.find('.button').simulate('click');
    expect(mockClick).toHaveBeenCalled();

  })
})