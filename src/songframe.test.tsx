import React from 'react'
import SoundcloudFrame from './soundcloudframe'
import {shallow} from 'enzyme'
import {URLTYPE, Link} from './types'
import SongFrame from './songframe';
import SpotifyFrame from './spotifyframe';

describe("<SongFrame />", () => {
  it("loads a SpotifyFrame for a Spotify URL", () => {
    const link:Link = {
      url: "",
      urlType: URLTYPE.SPOTIFY
    }
    const wrapper = shallow(<SongFrame songlink={link} />)
    expect(wrapper.find(<SpotifyFrame />))
  }) 
})
