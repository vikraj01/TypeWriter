import React, { useEffect, useState } from "react";
import '../text/text.css'
import englishWords from "an-array-of-english-words";

const TypingText = () => {
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState(60)
  const [error, setError] = useState(0)
  const [correct, setCorrect] = useState(0)

  //random word generation for text typing section
  const randomToggleFormat = (word) => {
    return Math.floor(Math.random() * 2) === 0
      ? { word: word[0].toUpperCase() + word.substring(1)}
      : { word: word, color: "neutralText" };
  };

  const randomWordGenerator = () => {
    return randomToggleFormat(
      englishWords[Math.floor(Math.random() * englishWords.length)]
    );
  };

  const randomwordsGenerator = () => {
    let randomWords = [];

    while (randomWords.length < 50) {
      randomWords.push(randomWordGenerator());
    }
    return randomWords;
  };

  //TODO: Optimise it
  useEffect(() => {
    if (currentWordIndex > 49) {
      setWords(randomwordsGenerator());
      setCurrentWord('')
      setCurrentWordIndex(0);
    }
  }, [currentWordIndex, randomwordsGenerator, setWords, setCurrentWordIndex]);

  //startgame function
  const startType = () => {
    let randomWords = randomwordsGenerator();
    setWords(randomWords);
    setIsStarted(true);
  }

  //stopgame function
  const stopType = () =>{
    setIsStarted(false);
    setInput('');
    setWords([])
    setCounter(60)
  }

  //check if currect typed word (set by index), matches the same word at that index in the display text the user is trying to copy.
  const currentWordInput = async () => {
    let oneWord =input.split(' ');
    let word = ''
    oneWord.length> 1 ? 
    word = oneWord[oneWord.length-1] : word= oneWord.join(' ');
    if(word === words[currentWordIndex].word){
      words[currentWordIndex].color = 'correctText'
      setCurrentWordIndex(prev=> prev+1)
      setCorrect(prev=> prev+1)
    }
    else{
      words[currentWordIndex].color = 'errorText'
      setCurrentWordIndex(prev=> prev+1)
      setError(prev=> prev+1)
    }
  }

  //handling the key presses, ignoring enters and deletes, processes spaces to trigger a wordCheck
  const handleKeyDown = (e) => {
    if (e.keyCode === 8 || e.keyCode === 46 || e.keyCode === 13) {
      e.preventDefault();
      return;
    } else if (e.keyCode === 32 && input.length>0) {
      setInput(prev=> prev+ ' ');
      currentWordInput()
    } else if (e.keyCode >=65 && e.keyCode<=90){
      setInput(prev=> prev+e.key)
    }
  };

  //start counter when practice is live if counter gets to zero refresh the game back to start
  useEffect(() => {
    if(counter<=0) stopType();
    if(isStarted && counter>0){
        console.log(counter)
        const timeInterval = setInterval(()=>{
          setCounter(prevTime=> prevTime-1);
        }, 1000);
      return ()=> clearInterval(timeInterval);
      }
    }, [isStarted, counter])

  return (
    <div>
      <h1 className="heading">Typing Practice</h1>
      <div className="score-section">
        <div><span>Counter {counter}</span></div>
        <div><span>Errors {error}</span></div>
        <div><span>Correct {correct}</span></div>
      </div>
      <div className="displayTextToCopy">
        {words.map((W, i) => (
          <span className={W.color} key={i}>
            {W.word}{' '}
          </span>
        ))}
      </div>

      {/* <Text>{words.length > 0 && words.join(" ")}</Text> */}
      <textarea
        readOnly={!isStarted}
        onKeyDown={handleKeyDown}
      />
      {isStarted===false? 
      <button onClick={startType}>Start Practice</button> :
      <button onClick={stopType}>Stop Practice</button>}

      <h2 className="heading">Report (Will be addded) </h2>
    </div>
  );
};

export default TypingText;
