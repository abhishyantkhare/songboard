import React, { Component } from 'react'
import BoardButton from './board_button'
import './board_control.css'

type BoardControlProps = {
  saveBoardFunc: () => void,
  newBoardFunc: () => void
}

class BoardControl extends Component<BoardControlProps, {}> {
  render() {
    return (
      <div className="button-container">
        <div className="save-button-container">
          <BoardButton title="Save Board" />
        </div>
        <div className="new-button-container">
          <BoardButton title="New Board" />
        </div>
      </div>
    )
  }
}

export default BoardControl;