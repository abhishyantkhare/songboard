import React from 'react'
import YoutubeFrame from './youtubeframe'
import {shallow} from 'enzyme'

describe('<YoutubeFrame />', () => {
  it('returns an iframe', () => {
    const wrapper = shallow(<YoutubeFrame url=""/>);
    expect(wrapper.find(<iframe />))
  });
  it('the iframe source is the props.url', () => {
    let url:string = "test.url"
    const wrapper = shallow(<YoutubeFrame url={url}/>);
    expect(wrapper.find(<iframe src={url} />))
  });
  it('has iframe with youtube properties', () => {
    const wrapper = shallow(<YoutubeFrame url="" />);
    expect(wrapper.find(<iframe 
      width="560" 
      height="315" 
      frameBorder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    />))
  })
})