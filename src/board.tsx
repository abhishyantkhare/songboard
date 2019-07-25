import React from 'react'
import {URLTYPE, Link} from './types'
import SongCard from './songcard'
import AddSong from './add_song'
import SectionHeader from './section_header'

/*
Contract
  * requires
  * ensures
    * retrieves the stored links for the current board
    * displays stored links in a responsive fashion
    * handles deleting logic for links
    * handles adding already validated links to the board 
*/

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

  getLinks() : Link[]{
    return this.state.links
  }

  deleteLink(link:Link) {

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
        <div>
          <SectionHeader title="Board Name" />
        </div>
        <div className="songs-container">
          {this.mapLinks()}
        </div>
        <AddSong />
      </div>
    )
  }

}

export default Board;