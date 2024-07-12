import React, { useContext } from 'react'
import './Right.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'
import run from '../../config/gemini'


//used webkit linear gradient ,webkit backgrond clip and webkit text fill color in the heading section for a gradient like text effect

const Right = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input,setLoading,setRecentPrompt,setShowResult,setResultData} = useContext(Context);

  return (
    <div className='right'>
        <div className="nav">
            <h2>Dev AI</h2>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="body">
            {!showResult?<>
                <div className="greet">
                <p><span>Hello, Everyone.</span></p> 
                <p>How can I help you today ?</p>
            </div>
            <div className="cards">
                <div onClick={() => {setInput("Give me some tips to save electricity")
                    setRecentPrompt(input)
                }} className="card">
                    <img src={assets.bulb_icon} alt="" />
                    <p>Give me some tips to save electricity</p>
                </div>
                <div onClick={() => {setInput("Tell about the history of India")
                    setRecentPrompt(input)
                }} className="card">
                    <img src={assets.history_icon} alt="" />
                    <p>Tell about the history of India</p>
                </div>
                <div onClick={() => {setInput("Suggest some good vacation destinations")
                    setRecentPrompt(input)
                }} className="card">
                    <img src={assets.compass_icon} alt="" />
                    <p>Suggest some good vacation destinations</p>
                </div>
            </div>
            </>:<div className='result'>
                <div className="quest">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="ans">
                    <img src={assets.gemini_icon} alt="" />
                    {!loading
                    ?<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                :<div className='loader'>
                    <hr />
                    <hr />
                    <hr />
                    </div>}
                </div>
                </div>}
            <div className='ip'>
                <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter your prompt' />
                <div className='send'>
                    <img src={assets.mic_icon} alt="" />
                    <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                </div>
            </div>
            <div className="footer">
            <p>This web-app is under development. Might have a lot of Bugs .AI answers/opinions are not always correct .Please cross-check before confirming .</p>
            <p>@copyright 2024.Made by Devi Prasad Sundaray</p>
            </div>
        </div>
    </div>
  )
}

export default Right