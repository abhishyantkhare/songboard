import React, { FC } from 'react'
import Logo from './logo'
import Desc from './desc'
import SectionHeader from './section_header'
import "./main_nav.css"
import {RouteComponentProps} from 'react-router'

interface MainNavProps{
  children?: any
}

const MainNav: FC = (props: MainNavProps) => {
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
        {props.children}
      </div>
    </div>
  )
}

export default MainNav;