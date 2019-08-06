import React from 'react';
import './App.css';
import Logo from './logo'
import Desc from './desc'
import SectionHeader from './section_header'
import BoardView from './board_view'
import BoardControl from './board_control'

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
        <div className="my-boards-container">
          <SectionHeader title="My Boards" />
        </div>
      </div>
      <div className="board-view">
        <BoardView />
      </div>
    </div>
  );
}

export default App;
