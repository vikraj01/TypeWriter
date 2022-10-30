import React, { useEffect, useState } from 'react'
import { Text, Heading, TextArea, Button } from './text.styles'
import englishWords from 'an-array-of-english-words'

const TypingText = () => {
  const [words, setWords] = useState([])
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isStarted, setIsStarted] = useState(false)
  const [currentWord, setCurrentWord] = useState('')
  const [input, setInput] = useState('')

  const randomToggleFormat = word => {
    return Math.floor(Math.random() * 2) === 0
      ? word[0].toUpperCase() + word.substring(1)
      : word
  }
  const randomWordGenerator = () => {
    return randomToggleFormat(
      englishWords[Math.floor(Math.random() * englishWords.length)]
    )
  }

  const randomwordsGenerator = () => {
    let randomWords = []
    let n = 1
    while (randomWords.length < 50) {
      randomWords.push(randomWordGenerator())
    }
    return randomWords
  }

  //TODO: Optimise it.
  useEffect(() => {
    if (currentWordIndex > 49) {
      setWords(randomwordsGenerator())
      setCurrentWordIndex(0)
    }
  }, [currentWordIndex, randomwordsGenerator, setWords, setCurrentWordIndex])

  const handlePractice = () => {
    if (!isStarted) {
      let randomWords = randomwordsGenerator()
      setWords(randomWords)
      setIsStarted(true)
    } else {
      setIsStarted(false)
      setWords([])
      setInput('')
    }
  }

  //TODO:handle the case of pressing enter button or other button cases
  const handleKeyPress = e => {
    const letter = e.key
    if (e.key === ' ') {
      const arr = input.split(' ')
      setCurrentWord(arr[arr.length - 1])
      setCurrentWordIndex(prev => prev + 1)
      checkWords()
    } else if (/^[a-zA-Z]+$/.test(e.key)) {
    }
  }

  // console.log(currentWord, currentWordIndex)
  // console.log(currentWord === words[currentWordIndex - 1])

  const checkWords = () => {
    //console.log('It worked', currentWord === words[currentWordIndex - 1])

    if (currentWord === words[currentWordIndex - 1]) {
      // change the color of words[currentWordIndex]
      // setWords(prev => (prev[currentWordIndex - 1] = 'correct'))
      const temp = words;
      temp[currentWordIndex - 1] = 'correct';
      console.log(temp)
      console.log(words)
    } else {
      //replaced = input.replace(currentWord, 'incorrect')
    }
  }

  const handleKeyDown = e => {
    if (e.keyCode === 8 || e.keyCode === 46) {
      e.preventDefault()
    }
  }

  const handleChange = event => {
    setInput(event.target.value)
  }

  return (
    <>
      <Heading>Typing Practice</Heading>
      <Text>{words.length > 0 && words.join(' ')}</Text>
      <TextArea
        value={input}
        onChange={handleChange}
        readOnly={!isStarted}
        onKeyPress={handleKeyPress}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handlePractice}>
        {isStarted ? 'Stop Practice' : 'Start Practice'}
      </Button>

      <Heading>Report (Will be addded ) </Heading>
    </>
  )
}

export default TypingText;

// if (randomWords.length === n * 10 - 1) {
//   randomWords.push('⏎')
//   n++
// }
