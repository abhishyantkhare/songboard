import React from 'react'
import { URLTYPE, Link } from './types'
import SpotifyFrame from './spotifyframe'
import YoutubeFrame from './youtubeframe'
import SoundcloudFrame from './soundcloudframe'


/*
Contract
require:
  * a songLink of type Link with a valid url and a type of URLTYPE 
ensure:
  * Returns the correct frame for the type of url passed in
    * URLTYPE.SPOTIFY - SpotifyFrame
    * URLTYPE.YOUTUBE - YoutubeFrame
    * URLTYPE.SOUNDCLOUD - SoundcloudFrame
*/


type Props = {
  songlink: Link
}


class SongFrame extends React.Component<Props, {}> {
  render() {
    return this.loadFromSongType()
  }

  loadFromSongType() {
    if (this.props.songlink.urlType === URLTYPE.SPOTIFY) {
      return (
        <SpotifyFrame url={this.props.songlink.url} />
      )
    }
    else if (this.props.songlink.urlType === URLTYPE.YOUTUBE) {
      return (
        <YoutubeFrame url={this.props.songlink.url} />
      )
    }
    else if (this.props.songlink.urlType === URLTYPE.SOUNDCLOUD) {
      return (
        <SoundcloudFrame url={this.props.songlink.url} />
      )
    }
  }
}

export default SongFrame;