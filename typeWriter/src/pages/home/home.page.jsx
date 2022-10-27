import React from 'react'
import { data } from '../../data'
import { useState } from 'react'

const Home = () => {
  //console.log(data.split(' '))
  const [userInput, setUserInput] = useState('')
  const [inputIndex, setInputIndex] = useState(0)
  

  const handleInput = e => {
    setUserInput(e.target.value);
    setInputIndex(userInput.length);
    // console.log(data[inputIndex], userInput)
    const currentLetter =  userInput[userInput.length-1];
    console.log(data[inputIndex], userInput[inputIndex])
    console.log(data[inputIndex] ===userInput[inputIndex])
  }
  


  return (
    <div>
      <p>{data}</p>
      <textarea
        onChange={handleInput}
        // onKeyDown={handleKeyDown}
        rows={5}
        cols={45}
      ></textarea>
      <button>Start Practice</button>
      <button>Stop Practice</button>
    </div>
  )
}

export default Home
