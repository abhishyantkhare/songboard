import React from 'react'
import './songcard.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@material-ui/core/IconButton';

type Props = {
  url: string
}

class SongCard extends React.Component<Props, {}> {
  render() {
    return(
      <div className="song-container">
        <div className="songcard">
          <iframe 
          src="https://open.spotify.com/embed/track/5JtPGzRgrWxkXX9LoROq3d"
          width="300" 
          height="80" 
          frameBorder="0" 
          allowTransparency={true}
          allow="encrypted-media">
          </iframe>
        </div>
        <IconButton aria-label="Delete" color="default">
          <DeleteOutlinedIcon/>
        </IconButton>
    </div>
    )
  }

}

export default SongCard;