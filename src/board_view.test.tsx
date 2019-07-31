import React from 'react'
import {shallow} from 'enzyme'
import BoardView from './board_view'
import {URLTYPE, Link} from './types'
import SongCard from './songcard'
import { TextField } from '@material-ui/core';
import AddSong from './add_song'



describe('<BoardView />' , () => {
  it('displays stored links', () => {
    const wrapper = shallow(<BoardView />);
    const board_links:Link[] = wrapper.instance().getLinks();
    board_links.forEach(link => {
      expect(wrapper.find(SongCard).findWhere(c => c.getLink() === link).exists()).toBe(true)
    })
  });
  it('calls the appropriate method for clicking delete', () => {
    const deleteLinkSpy = jest.spyOn(BoardView, 'deleteLink');
    const wrapper = shallow(<BoardView />);
    const link_0 = {
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/591147435&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      urlType: URLTYPE.SOUNDCLOUD
    };
    const card_0 = wrapper.find(SongCard).findWhere(c => c.getLink() === link_0);
    const del_0 = card_0.find('#delete_button');
    del_0.simulate('click')
    expect(deleteLinkSpy).toHaveBeenCalled();

  })
  it('handles deleting logic for links', () => {
    const wrapper = shallow(<BoardView />);
    const link_0 = {
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/591147435&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      urlType: URLTYPE.SOUNDCLOUD
    };

    //expect(wrapper.find(SongCard).findWhere(c => c.getLink() === link).exists()).toBe(false)
    expect(true).toBe(false);
  });
  it('has an AddSong component', () => {
    const wrapper = shallow(<BoardView />);
    expect(wrapper.containsMatchingElement(<AddSong />)).toBe(true);
  });
  it('handles adding songs from the AddSong component', () => {
    const wrapper = shallow(<BoardView />);
    const add_song = wrapper.find(AddSong);
    const link:Link = {url: 'test.url', urlType: URLTYPE.SPOTIFY};
    add_song.setState({link: link})
    const add_button = add_song.find("#add-song")
    //BREAK THIS IN TWO
    add_button.simulate('click')
    expect(wrapper.find(SongCard).findWhere(c => c.getLink() === link).exists()).toBe(true)

  })
})