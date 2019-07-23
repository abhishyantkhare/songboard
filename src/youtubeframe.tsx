import React from 'react'


/*
Contract
require:
  * url is a valid Youtube URL
ensure:
  * returns an iframe with the following properties:
   * width="560" 
   * height="315" 
   * src={this.props.url}
   * frameBorder="0" 
   * allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
*/

type Props = {
  url: string
}

class YoutubeFrame extends React.Component<Props, {}> {
  render() {
    return (
      <iframe 
      width="560" 
      height="315" 
      src={this.props.url}
      frameBorder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      >
      </iframe>
    )
  }
}


export default YoutubeFrame;