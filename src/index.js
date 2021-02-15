import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => (<h1>{text}</h1>)

const Button = ({ text, handleClick }) => (<button onClick={handleClick}>{text}</button>)

const Stats = ({ good, neutral, bad }) => {
  const totalVotes = good + neutral + bad
  const totalPoints = good - bad
  const average = totalPoints / totalVotes
  const positive = good / totalVotes * 100

  return (<div>
    <div>good {good}</div>
    <div>neutral {neutral}</div>
    <div>bad {bad}</div>
    <div>all {totalVotes}</div>
    <div>average {average}</div>
    <div>positive {positive} %</div>
  </div>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text='give feedback' />
      <Button text='good' handleClick={() => setGood(good + 1)} />
      <Button text='neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button text='bad' handleClick={() => setBad(bad + 1)} />
      <Header text='statistics' />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
