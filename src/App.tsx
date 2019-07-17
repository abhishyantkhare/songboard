import React from 'react';
import './App.css';
import Logo from './logo'
import Desc from './desc'
import BoardButton from './board_button'

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
        <div>
          <BoardButton title="Save Board" />
        </div>
      </div>
    </div>
  );
}

export default App;
