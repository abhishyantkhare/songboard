import React from 'react'
import "./board_button.css"

type Props = {
  title: string;
}

class BoardButton extends React.Component<Props, {}> {
  render() {
    return (
      <div className="button">
        {this.props.title}
      </div>
    )
  }
}

export default BoardButton;