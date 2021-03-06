import React, { Component } from "react";
import BoardButton from "components/board_button/board_button";
import "content/board_control/board_control.css";

type BoardControlProps = {
  saveBoardFunc: () => void;
  newBoardFunc: () => Promise<void>;
};

class BoardControl extends Component<BoardControlProps, {}> {
  render() {
    return (
      <div className="button-container">
        <div className="save-button-container">
          <BoardButton title="Save Board" onClick={this.props.saveBoardFunc} />
        </div>
        <div className="new-button-container">
          <BoardButton title="New Board" onClick={this.props.newBoardFunc} />
        </div>
      </div>
    );
  }
}

export default BoardControl;
