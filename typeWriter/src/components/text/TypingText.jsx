import React, { useEffect, useState } from "react";
import '../text/text.css'
import englishWords from "an-array-of-english-words";

const TypingText = () => {
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [input, setInput] = useState("");

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

  const handlePractice = () => {
    if (!isStarted) {
      let randomWords = randomwordsGenerator();
      setWords(randomWords);
      setIsStarted(true);
    } else {
      setIsStarted(false);
      setWords([]);
      setInput("");
    }
  };
  const currentWordInput = async () => {
    let oneWord =input.split(' ');
    let word = ''
    oneWord.length> 1 ? 
    word = oneWord[oneWord.length-1] : word= oneWord.join(' ');
    if(word === words[currentWordIndex].word){
      words[currentWordIndex].color = 'correctText'
      setCurrentWordIndex(prev=> prev+1)
    }
    else{
      words[currentWordIndex].color = 'errorText'
      setCurrentWordIndex(prev=> prev+1)
    }
  }

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

  return (
    <>
      <h1 className="heading">Typing Practice</h1>
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
      <button onClick={handlePractice}>
        {isStarted ? "Stop Practice" : "Start Practice"}
      </button>

      <h2 className="heading">Report (Will be addded ) </h2>
    </>
  );
};

export default TypingText;
