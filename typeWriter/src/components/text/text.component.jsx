import React, { useEffect, useState } from "react";
import { Word, Text, Heading, TextArea, Button } from "./text.styles";
import englishWords from "an-array-of-english-words";

const TypingText = () => {
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [input, setInput] = useState("");

  const randomToggleFormat = (word) => {
    return Math.floor(Math.random() * 2) === 0
      ? { word: word[0].toUpperCase() + word.substring(1)}
      : { word: word, color: "black" };
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
      words[currentWordIndex].color = 'green;'
      setCurrentWordIndex(prev=> prev+1)
    }
    else{
      words[currentWordIndex].color = 'red;'
      setCurrentWordIndex(prev=> prev+1)
    }
  }

  const handleKeyDown = (e) => {
    console.log(e.keyCode)
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
      <Heading>Typing Practice</Heading>
      <Text>
        {words.map((W, i) => (
          <Word color={W.color} key={i}>
            {W.word}{" "}
          </Word>
        ))}
      </Text>

      {/* <Text>{words.length > 0 && words.join(" ")}</Text> */}
      <TextArea
        readOnly={!isStarted}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handlePractice}>
        {isStarted ? "Stop Practice" : "Start Practice"}
      </Button>

      <Heading>Report (Will be addded ) </Heading>
    </>
  );
};

export default TypingText;

// if (randomWords.length === n * 10 - 1) {
//   randomWords.push('')
//   n++
// }
