import React from 'react'
import {shallow} from 'enzyme'
import {URLTYPE, Link} from './types'
import SongFrame from './songframe';
import SpotifyFrame from './spotifyframe';
import YoutubeFrame from './youtubeframe';
import SoundcloudFrame from './soundcloudframe';

describe("<SongFrame />", () => {
  it("loads a SpotifyFrame for a Spotify URL", () => {
    const link:Link = {
      url: "",
      urlType: URLTYPE.SPOTIFY
    }
    const wrapper = shallow(<SongFrame songlink={link} />)
    expect(wrapper.containsMatchingElement(<SpotifyFrame />)).toBe(true);
  });
  it("loads a YoutubeFrame for a Youtube URL", () => {
    const link:Link = {
      url: "",
      urlType: URLTYPE.YOUTUBE
    }
    const wrapper = shallow(<SongFrame songlink={link} />)
    expect(wrapper.containsMatchingElement(<YoutubeFrame />)).toBe(true);
  });
  it("loads a SoundcloudFrame for a Soundcloud URL", () => {
    const link:Link = {
      url: "",
      urlType: URLTYPE.SOUNDCLOUD
    }
    const wrapper = shallow(<SongFrame songlink={link} />)
    expect(wrapper.containsMatchingElement(<SoundcloudFrame />)).toBe(true);
  });
})
