import React from 'react'
import './Right.css'
import { assets } from '../../assets/assets'

//used webkit linear gradient ,webkit backgrond clip and webkit text fill color in the heading section for a gradient like text effect

const Right = () => {
  return (
    <div className='right'>
        <div className="nav">
            <h2>Dev AI</h2>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="body">
            <div className="greet">
                <p><span>Hello, Everyone.</span></p> 
                <p>How can I help you today ?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <img src={assets.bulb_icon} alt="" />
                    <p>Give me some tips to save electricity</p>
                </div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
        </div>
    </div>
  )
}

export default Right