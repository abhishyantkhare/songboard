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
    const wrapper = shallow(<SongCard songlink={link}/>)
    expect(wrapper.find(<SongFrame songlink={link} />))
  });
  it('loads a delete button div', () => {
    const wrapper = shallow(<SongCard />)
    expect(wrapper.find(".delete_button"))
  })
})