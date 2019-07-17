import React from 'react'
import './section_header.css'

type Props = {
  title: string
}

class SectionHeader extends React.Component<Props, {}> {
  render() {
    return (
      <div className="title">
        {this.props.title}
        <div className="underline" />
      </div>
    )
  }
}

export default SectionHeader;