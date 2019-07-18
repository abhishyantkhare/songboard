import React from 'react'
import './songcard.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@material-ui/core/IconButton';
import SongFrame from './songframe'
import {Link} from './types'

type Props = {
  songlink: Link 
}

class SongCard extends React.Component<Props, {}> {
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