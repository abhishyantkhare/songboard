import React from "react";
import "components/board_button/board_button.css";

type Props = {
  title: string;
  onClick: (arg: any) => any;
};

class BoardButton extends React.Component<Props, {}> {
  render() {
    return (
      <div className="button" onClick={this.props.onClick}>
        {this.props.title}
      </div>
    );
  }
}

export default BoardButton;
