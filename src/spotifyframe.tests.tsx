import React from 'react'
import SpotifyFrame from './spotifyframe'
import {shallow} from 'enzyme'


describe('<SpotifyFrame />', () => {
  it('returns an iframe'), () => {
    const wrapper = shallow(<SpotifyFrame url=""/>);
    expect(wrapper.find(<iframe />))
  }
})