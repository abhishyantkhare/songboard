import React from 'react'
import {shallow} from 'enzyme'
import Board from './board'
import Link from './types'
import SongCard from './songcard'
jest.mock('./api')
import api from './api'
import links from './api'

describe('<Board />' , () => {
  it('retrieves the stored links for the current board', () => {
    const get_links_spy = jest.spyOn(api, 'get_links');
    const wrapper = shallow(<Board />);
    expect(get_links_spy).toHaveBeenCalled();
    expect(wrapper.instance().getLinks()).toEqual(links).toBe(true);
  });
  it('displays stored links', () => {
    const wrapper = shallow(<Board />);
    const board_links:Link[] = wrapper.instance().getLinks();
    board_links.forEach(link => {
      expect(wrapper.find(SongCard).findWhere(c => c.getURL() === link.getURL).exists()).toBe(true)
    })
  });
  it('handles deleting logic for links', () => {
    const wrapper = shallow(<Board />);
    const link_0 = links[0];
    wrapper.instance().deleteLink()
  })
})