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

  //TODO: Optimise it
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

  const handleKeyPress = e => {
    const letter = e.key
    if (e.key === ' ') {
      const arr = input.split(' ')
      setCurrentWord(arr[arr.length - 1])
      setCurrentWordIndex(prev => prev + 1)
    } else if (/^[a-zA-Z]+$/.test(e.key)) {
      setCurrentWord(prev => prev + letter)
    }
  }

  console.log(currentWord, currentWordIndex)
  console.log(currentWord === words[currentWordIndex])

  const handleKeyDown = e => {
    if (e.keyCode === 8 || e.keyCode === 46) {
      e.preventDefault()
    }
  }

  const handleChange = (event, newValue, reason) => {
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

export default TypingText

// if (randomWords.length === n * 10 - 1) {
//   randomWords.push('⏎')
//   n++
// }
