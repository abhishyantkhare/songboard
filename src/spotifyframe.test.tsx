import React from 'react'
import SpotifyFrame from './spotifyframe'
import {shallow} from 'enzyme'


describe('<SpotifyFrame />', () => {
  it('returns an iframe', () => {
    const wrapper = shallow(<SpotifyFrame url=""/>);
    expect(wrapper.find(<iframe />))
  });
  it('the iframe source is the props.url', () => {
    let url:string = "test.url"
    const wrapper = shallow(<SpotifyFrame url={url}/>);
    expect(wrapper.find(<iframe src={url} />))
  });
  it('has iframe with spotify properties', () => {
    const wrapper = shallow(<SpotifyFrame url="" />);
    expect(wrapper.find(<iframe 
      width="300"
      height="80"
      frameBorder="0"
      allowTransparency={true}
      allow="encrypted-media"
    />))
  })
});