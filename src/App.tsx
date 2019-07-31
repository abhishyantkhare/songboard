import React from 'react';
import './App.css';
import Logo from './logo'
import Desc from './desc'
import BoardButton from './board_button'
import SectionHeader from './section_header'
import BoardView from './board_view'

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
        <BoardView board_id={"0"}/>
      </div>
    </div>
  );
}

export default App;
