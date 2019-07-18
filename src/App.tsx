import React from 'react';
import './App.css';
import Logo from './logo'
import Desc from './desc'
import BoardButton from './board_button'
import SectionHeader from './section_header'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Board from './board'

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App-header">
        <div className="logo-container">
          <Logo />
        </div>
        <div className="desc-container">
          <Desc />
        </div>
        <div className="save-button-container">
          <BoardButton title="Save Board" />
        </div>
        <div className="new-button-container">
          <BoardButton title="New Board" />
        </div>
        <div className="my-boards-container">
          <SectionHeader title="My Boards" />
        </div>
      </div>
      <div className="board-view">
        <div>
          <SectionHeader title="Board Name" />
        </div>
        <div className="songs-container">
          <Board />
        </div>
        <div className="add-container"> 
          <SectionHeader title="Add a Song" />
        </div>
        <div className="add-song">
          <div className="add-text">
            <TextField 
            fullWidth={true}
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
    </div>
  );
}

export default App;
