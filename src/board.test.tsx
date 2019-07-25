import React from 'react'
import {shallow} from 'enzyme'
import Board from './board'
import {URLTYPE, Link} from './types'
import SongCard from './songcard'
import { TextField } from '@material-ui/core';
import AddSong from './add_song'


jest.mock('./api')
import links from './api'

describe('<Board />' , () => {
  it('retrieves the stored links for the current board', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.instance().getLinks()).toEqual(links).toBe(true);
  });
  it('displays stored links', () => {
    const wrapper = shallow(<Board />);
    const board_links:Link[] = wrapper.instance().getLinks();
    board_links.forEach(link => {
      expect(wrapper.find(SongCard).findWhere(c => c.getLink() === link).exists()).toBe(true)
    })
  });
  it('handles deleting logic for links', () => {
    const wrapper = shallow(<Board />);
    const link_0 = links[0];
    const card_0 = wrapper.find(SongCard).findWhere(c => c.getLink() === link_0);
    const del_0 = card_0.find('#delete_button');
    del_0.simulate('click')
    expect(wrapper.instance().getLinks().includes(link_0)).toBe(false);
  });
  it('has an AddSong component', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.containsMatchingElement(<AddSong />)).toBe(true);
  });
  it('handles adding songs from the AddSong component', () => {
    const wrapper = shallow(<Board />);
    const add_song = wrapper.find(AddSong);
    const link:Link = {url: 'test.url', urlType: URLTYPE.SPOTIFY};
    add_song.setState({link: link})
    const add_button = add_song.find("#add-song")
    add_button.simulate('click')
    expect(wrapper.find(SongCard).findWhere(c => c.getLink() === link).exists()).toBe(true)

  })
})