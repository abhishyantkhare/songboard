import React from 'react'
import {URLTYPE, Link} from './types'
import SongCard from './songcard'

type State = {
  links: Link[]
}
type Props = {

}

const DUMMY_LINKS = [
  {
    url: "https://open.spotify.com/embed/track/5JtPGzRgrWxkXX9LoROq3d",
    urlType: URLTYPE.SPOTIFY
  },
  {
    url: "https://www.youtube.com/embed/miJAfs7jhak",
    urlType: URLTYPE.YOUTUBE
  },
  {
    url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/591147435&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    urlType: URLTYPE.SOUNDCLOUD
  }
]


class Board extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      links: DUMMY_LINKS 
    }
  }

  mapLinks() : JSX.Element[]{
    return this.state.links.map(
      link => (
        <SongCard 
        songlink={link}
        />
      )
    )
  }

  render() {
    return(
      <div>
        {this.mapLinks()}
      </div>
    )
  }

}

export default Board;