import React, { useState } from 'react'
import './Left.css'
import {assets} from '../../assets/assets.js'

const Left = () => {

  const [breadth,setBreadth] = useState(false);

  return (
    <div className='left'>
      <div>
      <img src={assets.menu_icon} alt="" className='menu' onClick={() => setBreadth(prev => !prev)}/>
      <div className='newchat'>
        <img src={assets.plus_icon} alt="" />
        {breadth?<p>New Chat</p>:null}
      </div>
      {breadth?<div className="recent">
        <p>Recent</p>
        <div className="rechat">
          <img src={assets.message_icon} alt="" />
          <p>What is illuminati</p>
        </div>
      </div>:null}</div>
      <div>
      <div className="help rechat">
        <img src={assets.question_icon} alt="" />
        {breadth?<p>Help</p>:null}
      </div>
      <div className="setting rechat">
        <img src={assets.setting_icon} alt="" />
        {breadth?<p>Settings</p>:null}
      </div>
      <div className="history rechat">
        <img src={assets.history_icon} alt="" />
        {breadth?<p>History</p>:null}
      </div></div>
    </div>
  )
}

export default Left