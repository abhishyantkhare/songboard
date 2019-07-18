import React from 'react'
import { URLTYPE, Link } from './types'
import SpotifyFrame from './spotifyframe'
import YoutubeFrame from './youtubeframe'
import SoundcloudFrame from './soundcloudframe'

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