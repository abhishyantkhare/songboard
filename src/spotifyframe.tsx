import React from 'react'

type Props = {
  url: string
}

class SpotifyFrame extends React.Component<Props, {}> {
  render() {
    return (
      <iframe
        src={this.props.url}
        width="300"
        height="80"
        frameBorder="0"
        allowTransparency={true}
        allow="encrypted-media">
      </iframe>
    )
  }
}

export default SpotifyFrame;