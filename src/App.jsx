import React from 'react'
import './App.css'
import Left from './Components/Left_side/Left'
import Right from './Components/Right_side/Right'

const App = () => {
  return (
    <div className='app'>
      <Left/>
      <Right/>
    </div>
  )
}

export default App