import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SectionHeader from './section_header';
import './add_song.css';

/*
Contract
  * requires:
  * ensures:
    * user enters text onto textfield which gets set as state
    * On button click
      * validates link as a valid link of the following types
        * Spotify
        * Soundcloud
        * Youtube
      * Creates a link with the matching type
      * Calls given onclick method in props
    *  
*/
type AddSongProps = {

};

type AddSongState = {
  url: string
}

class AddSong extends Component<AddSongProps, AddSongState> {
  constructor(props:AddSongProps){
    super(props);
    this.state = {
      url: ""
    }
    this.onTextChange = this.onTextChange.bind(this);

  }

  get URL() : string {
    return this.state.url;
  }

  onTextChange(e:React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      url: e.target.value
    })
  }

  render(){
    return(
      <div>
        <div className="add-container"> 
          <SectionHeader title="Add a Song" />
        </div>
        <div className="add-song">
          <div className="add-text">
            <TextField 
            fullWidth={true}
            onChange={this.onTextChange}
            />
          </div>
          <div className="add-button">
            <Fab 
            color="primary"
            aria-label="Add" 
            size="small"
            >
              <AddIcon />
            </Fab>
          </div>
        </div>
      </div>
    )
  }
}

export default AddSong;