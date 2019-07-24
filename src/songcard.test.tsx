import React from 'react'
import {shallow} from 'enzyme'
import {URLTYPE, Link} from './types'
import SongCard from './songcard'
import SongFrame from './songframe'

describe('<SongCard />', () => {
  it('loads a SongFrame that has the songlink as the prop', () => {
    const link:Link = {
      url: "test.url",
      urlType: URLTYPE.SOUNDCLOUD
    }
    const wrapper = shallow(<SongCard songlink={link}/>);
    expect(wrapper.find(SongFrame).exists()).toBeTruthy();
  });
  it('loads a delete button div', () => {
    const link:Link = {
      url: "test.url",
      urlType: URLTYPE.SOUNDCLOUD
    }
    const wrapper = shallow(<SongCard songlink={link}/>)
    expect(wrapper.find("#delete_button").exists()).toBeTruthy();
  });
  it('calls given onclick fn to delete', () => {
    const onDeleteClick = jest.fn().mockName('onDeleteClick')    
    //ADD ARGUMENT CHECK
    const link:Link = {
      url: "test.url",
      urlType: URLTYPE.SOUNDCLOUD
    }
    const wrapper = shallow(<SongCard songlink={link} onDeleteClick={onDeleteClick}/>)
    wrapper.find("#delete_button").simulate('click')
    expect(onDeleteClick).toHaveBeenCalled();
  })
})