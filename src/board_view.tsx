import React from 'react'
import { Board, URLTYPE, Link } from './types'
import SongCard from './songcard'
import AddSong from './add_song'
import SectionHeader from './section_header'
import API from './__mocks__/api'
import BoardControl from './board_control'

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
  id: string,
  links: Link[]
}
type BoardViewProps = {
}



class BoardView extends React.Component<BoardViewProps, State> {
  constructor(props: BoardViewProps) {
    super(props);
    this.state = {
      id: "0",
      links: []
    }
    this.addLink = this.addLink.bind(this);
    this.mapLinks = this.mapLinks.bind(this);
    this.loadLinks = this.loadLinks.bind(this);
    this.makeNewBoard = this.makeNewBoard.bind(this);
  }

  componentDidMount() {
    this.loadLinks();
  }

  loadLinks() {
    API.getBoard(this.state.id, "")
      .then(board => {
        this.setState({
          links: board.links
        })
      })
  }

  get links(): Link[] {
    return this.state.links
  }
  get id(): string {
    return this.state.id;
  }

  deleteLink(link: Link) {

  }

  addLink(link: Link) {
    return API.addLinkToBoard(this.state.id, link, "")
      .then(response => {
        this.loadLinks();
      })
  }

  makeNewBoard() : Promise<void>{
    var that = this;
    return new Promise(function (resolve, reject) {
      API.newBoard()
        .then((response) => 
          that.setState({
            id: response.message,
            links: []
          }, resolve)
        )
    });
  }
  
  saveBoard() : void{

  }

  mapLinks(): JSX.Element[] {
    return this.state.links.map(
      link => (
        <SongCard
          key={link.url}
          songlink={link}
        />
      )
    )
  }

  render() {
    return (
      <div>
        <div>
          <SectionHeader title="Board Name" />
        </div>
        <div>
          <BoardControl 
          newBoardFunc={this.makeNewBoard}
          saveBoardFunc={this.saveBoard}
          />
        </div>
        <div className="songs-container">
          {this.mapLinks()}
        </div>
        <AddSong onPlusClick={this.addLink} />
      </div>
    )
  }

}

export default BoardView;