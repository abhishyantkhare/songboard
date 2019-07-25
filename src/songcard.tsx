import React from 'react'
import './songcard.css'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@material-ui/core/IconButton';
import SongFrame from './songframe'
import {Link} from './types'

/*
Contract
  * requires:
    * a valid songlink of type Link
  * ensures:
    * loads a SongFrame that has the songlink as the prop
    * loads a delete button div with a delete button in it
    * calls props delete fn on click of delete button 
*/

type Props = {
  songlink: Link 
}

class SongCard extends React.Component<Props, {}> {

  getLink():Link {
    return this.props.songlink;
  }

  render() {
    return(
      <div className="song-container">
        <div className="songcard">
          <SongFrame songlink={this.props.songlink} />
        </div>
        <IconButton aria-label="Delete" color="default">
          <DeleteOutlinedIcon/>
        </IconButton>
    </div>
    )
  }

}

export default SongCard;