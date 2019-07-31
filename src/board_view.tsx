import React from 'react'
import {URLTYPE, Link} from './types'
import SongCard from './songcard'
import AddSong from './add_song'
import SectionHeader from './section_header'
import API from './api'

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
type BoardViewProps = {
  board_id:string
}



class BoardView extends React.Component<BoardViewProps, State> {
  constructor(props:BoardViewProps) {
    super(props);
    this.state = {
      links: []
    }
    this.mapLinks = this.mapLinks.bind(this);
  }

  componentDidMount() {
    API.getBoardLinks(this.props.board_id, "")
    .then(links => {
      console.log(links)
      this.setState({
        links: links
      })
    })
  }

  getLinks() : Link[]{
    return this.state.links
  }

  deleteLink(link:Link) {

  }

  addLink(link:Link) {
    
  }

  mapLinks() : JSX.Element[]{
    console.log(this.state.links)
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

export default BoardView;