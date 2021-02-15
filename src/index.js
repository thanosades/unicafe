import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => (<h1>{text}</h1>)

const Button = ({ text, handleClick }) => (<button onClick={handleClick}>{text}</button>)

const Statistic = ({ text, value }) => <div>{text} {value}</div>

const Statistics = ({ good, neutral, bad }) => {
  const totalVotes = good + neutral + bad

  // conditional rendering
  if (totalVotes === 0) {
    return (<div>No feedback given</div>)
  }

  const totalPoints = good - bad
  const average = totalPoints / totalVotes
  const positive = (good / totalVotes * 100) + '%'

  return (<div>
    <Statistic text='good' value={good} />
    <Statistic text='neutral' value={neutral} />
    <Statistic text='bad' value={bad} />
    <Statistic text='all' value={totalVotes} />
    <Statistic text='average' value={average} />
    <Statistic text='positive' value={positive} />
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
