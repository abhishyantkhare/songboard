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
    const board_links:Link[] = wrapper.instance().links;
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
  it('adds song on add link call', () => {
    const link:Link = {
      url: "https://open.spotify.com/embed/track/5ry2OE6R2zPQFDO85XkgRb",
      urlType: URLTYPE.SPOTIFY
    };
    const wrapper = shallow(<BoardView />)
    return wrapper.instance().addLink(link)
    .then(() => {
      expect(wrapper.instance().links.includes(link)).toBe(true)
    });
  });
  it('makes a new board with new id on new board method', () => {
    const wrapper = shallow(<BoardView />)
    const id = wrapper.instance().id;
    return wrapper.instance().makeNewBoard().then(() => {
      expect(wrapper.instance().id == id).toBe(false);
    });
    
  });
  it('makes a new boad with empty links', () => {
    const wrapper = shallow(<BoardView />)
    wrapper.instance().makeNewBoard();
    expect(wrapper.instance().links.length == 0).toBe(true);
  })
})