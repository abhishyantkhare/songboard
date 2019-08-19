import React from "react";
import "./songcard.css";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutline";
import IconButton from "@material-ui/core/IconButton";
import SongFrame from "./songframe";
import { Link } from "./types";

/*
Contract
  * requires:
    * a valid songlink of type Link
  * ensures:
    * loads a SongFrame that has the songlink as the prop
    * loads a delete button div with a delete button in it
    * calls props delete fn on click of delete button 
*/

type SongCardProps = {
  songlink: Link;
  deleteLink: (link: Link) => void;
};

class SongCard extends React.Component<SongCardProps, {}> {
  constructor(props: SongCardProps) {
    super(props);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  getLink(): Link {
    return this.props.songlink;
  }

  onDeleteClick(e: React.MouseEvent<HTMLElement>) {
    this.props.deleteLink(this.props.songlink);
  }

  render() {
    return (
      <div className="song-container">
        <div className="songcard">
          <SongFrame songlink={this.props.songlink} />
        </div>
        <div className="delete-button" onClick={this.onDeleteClick}>
          <IconButton aria-label="Delete" color="default">
            <DeleteOutlinedIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default SongCard;
