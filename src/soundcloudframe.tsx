import React from 'react'

type Props = {
  url: string
}

class SoundcloudFrame extends React.Component<Props, {}> {
  render() {
    return (
      <iframe 
      width="100%" 
      height="166" 
      scrolling="no" 
      frameBorder="no" 
      allow="autoplay" 
      src={this.props.url}>
      </iframe>
    )
  }
}

export default SoundcloudFrame;