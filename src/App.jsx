import { useState } from 'react'

const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({ text, value }) => {
  if (!value || value === 0) {
    return (
      <p>{text}: 0</p>
    )
  }
  return (
    <p>{text}: {value}</p>
  )
}

const Statistics = ({ good, neutral, bad, all}) => {
  const average = () => (good - bad) / all
  const positivePercent = () => (good / all) * 100
  
  if (good === 0 && neutral === 0 && bad === 0 && all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <>
      <StatisticLine text='good' value={good}></StatisticLine>
      <StatisticLine text='neutral' value={neutral}></StatisticLine>
      <StatisticLine text='bad' value={bad}></StatisticLine>
      <StatisticLine text='all' value={all}></StatisticLine>
      <StatisticLine text='average' value={average()}></StatisticLine>
      <StatisticLine text='positive' value={positivePercent() + '%'}></StatisticLine>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handlerClickGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const handlerClickNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const handlerClickBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <Header text='give feedback'></Header>
      <Button onClick={handlerClickGood} text='good'></Button>
      <Button onClick={handlerClickNeutral} text='neutral'></Button>
      <Button onClick={handlerClickBad} text='bad'></Button>
      <br />
      <Header text='statistics'></Header>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}></Statistics>
    </div>
  )
}

export default App