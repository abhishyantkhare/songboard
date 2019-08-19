import React from "react";
import { Board, URLTYPE, Link } from "./types";
import SongCard from "./songcard";
import AddSong from "./add_song";
import SectionHeader from "./section_header";
import API from "./__mocks__/api";
import BoardControl from "./board_control";
import { RouteComponentProps } from "react-router-dom";

/*
Contract
  * requires
  * ensures
    * retrieves the stored links for the current board
    * displays stored links in a responsive fashion
    * handles deleting logic for links
    * handles adding already validated links to the board 
*/ interface BoardMatch {
  id: string;
}

interface BoardViewProps extends RouteComponentProps<BoardMatch> {}

class BoardView extends React.Component<BoardViewProps, Board> {
  constructor(props: BoardViewProps) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      links: []
    };
    this.addLink = this.addLink.bind(this);
    this.mapLinks = this.mapLinks.bind(this);
    this.loadLinks = this.loadLinks.bind(this);
    this.deleteLink = this.deleteLink.bind(this);
    this.makeNewBoard = this.makeNewBoard.bind(this);
  }

  componentDidMount() {
    this.loadLinks();
  }

  componentWillReceiveProps(newProps: BoardViewProps) {
    this.setState(
      {
        id: newProps.match.params.id
      },
      this.loadLinks
    );
  }

  loadLinks(): Promise<void> {
    var that = this;
    return new Promise(function(resolve, reject) {
      API.getBoard(that.state.id, "").then(board => {
        that.setState(
          {
            links: board.links
          },
          resolve
        );
      });
    });
  }

  get links(): Link[] {
    return this.state.links;
  }
  get id(): string {
    return this.state.id;
  }

  deleteLink(link: Link): Promise<void> {
    var that = this;
    return new Promise(function(resolve, reject) {
      API.deleteLinkFromBoard(that.state, link, "")
        .then(response => {
          return that.loadLinks();
        })
        .then(() => {
          resolve();
        });
    });
  }

  addLink(link: Link) {
    return API.addLinkToBoard(this.state.id, link, "").then(response => {
      this.loadLinks();
    });
  }

  makeNewBoard(): Promise<void> {
    var that = this;
    return new Promise(function(resolve, reject) {
      API.newBoard().then(response =>
        that.setState(
          {
            id: response.message,
            links: []
          },
          resolve
        )
      );
    });
  }

  saveBoard(): Promise<void> {
    var that = this;
    return new Promise(function(resolve, reject) {
      API.saveBoard(that.state).then(response => {
        resolve();
      });
    });
  }

  mapLinks(): JSX.Element[] {
    return this.state.links.map(link => (
      <SongCard key={link.url} songlink={link} deleteLink={this.deleteLink} />
    ));
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
        <div className="songs-container">{this.mapLinks()}</div>
        <AddSong onPlusClick={this.addLink} />
      </div>
    );
  }
}

export default BoardView;
