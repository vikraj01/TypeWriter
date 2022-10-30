import React from 'react'
import { data } from '../../data'
import { useState, useEffect } from 'react'

const Home = () => {

  const [timer, setTimer] = useState(60)
  const [startType, setStartType] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [inputIndex, setInputIndex] = useState(0);
  const [refData, setRefData] = useState(data);
  const [errorCount, setErrorCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [block, setBlock] = useState(true);

  useEffect(() => {
    const timeInterval = setInterval(()=>{
      setTimer(prevTime=> prevTime-1);
    }, 1000);
    return ()=> clearInterval(timeInterval);
  }, [])

  const compareLetters = () => {
    if(userInput === refData.slice(0,inputIndex+1)){
      setCorrectCount(userInput.length);
      setBlock(false);
    }
    else {
      
    }
  };
  console.log(userInput.length)
  
  const handleInput = e => {
    if(block===false){
      console.log(e.target.value)
      setUserInput(e.target.value);
      setInputIndex(userInput.length);
    }
  };
  // console.log(refData[inputIndex], userInput[inputIndex])
  // console.log(refData[inputIndex] ===userInput[inputIndex])
  const startPractice = () => {
      setStartType(true);
  };

  const stopPractice = () => {
      setStartType(false);
  };

  return (
    <div>
      <p>{data}</p>
      <span>Currect: {correctCount}</span>
      <br />
      <textarea
        onChange={handleInput}
        // onKeyDown={handleKeyDown}
        rows={5}
        cols={45}
      ></textarea>
      <p>{timer}</p>
      <button onClick={startPractice}>Start Practice</button>
      <button onClick={stopPractice}>Stop Practice</button>
    </div>
  )
}

export default Home
