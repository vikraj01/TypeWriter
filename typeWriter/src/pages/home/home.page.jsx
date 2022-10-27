import React from 'react'
import { data } from '../../data'
import { useState } from 'react'

const Home = () => {
  //console.log(data.split(' '))
  const [userInput, setUserInput] = useState('')

  const handleInput = e => {
    setUserInput(e.target.value)
    const index = userInput.length
    
  }


  return (
    <div>
      <p>{data}</p>
      <textarea
        onChange={handleInput}
        rows={5}
        cols={45}
      ></textarea>
      <button>Start Practice</button>
      <button>Stop Practice</button>
    </div>
  )
}

export default Home
