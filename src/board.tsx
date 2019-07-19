import React from 'react'
import {URLTYPE, Link} from './types'
import SongCard from './songcard'

type State = {
  links: Link[]
}
type Props = {

}



class Board extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      links: []
    }
  }

  componentDidMount() {
    console.log(process.env.REACT_APP_BACKEND_URL)
    fetch(process.env.REACT_APP_BACKEND_URL + "/songs")
    .then(function(response){
      return response.json()
    })
    .then(songJson => {
      this.setState({
        links: songJson
      })
    })
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