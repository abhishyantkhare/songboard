import React from 'react'
import SoundcloudFrame from './soundcloudframe'
import {shallow} from 'enzyme'

describe('<SoundcloudFrame />', () => {
  it('returns an iframe', () => {
    const wrapper = shallow(<SoundcloudFrame url=""/>);
    expect(wrapper.find(<iframe />))
  });
  it('the iframe source is the props.url', () => {
    let url:string = "test.url"
    const wrapper = shallow(<SoundcloudFrame url={url}/>);
    expect(wrapper.find(<iframe src={url} />))
  });
  it('has iframe with soundcloud properties', () => {
    const wrapper = shallow(<SoundcloudFrame url="" />);
    expect(wrapper.find(<iframe 
      width="100%" 
      height="166" 
      scrolling="no" 
      frameBorder="no" 
      allow="autoplay" 
    />))
  })
})