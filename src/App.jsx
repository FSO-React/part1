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

const Stat = ({ stat, amount }) => {
  if (!amount || amount === 0) {
    return (
      <p>{stat}: 0</p>
    )
  }
  return (
    <p>{stat}: {amount}</p>
  )
}

const Percent = ({ text, amount }) => {
  if (!amount || amount === 0) {
    return (
      <p>{text}: 0 %</p>
    )
  }
  return (
    <p>{text}: {amount} %</p>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
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

  const average = () => (good - bad) / all
  const positivePercent = () => (good / all) * 100

  return (
    <div>
      <Header text='give feedback'></Header>
      <Button onClick={handlerClickGood} text='good'></Button>
      <Button onClick={handlerClickNeutral} text='neutral'></Button>
      <Button onClick={handlerClickBad} text='bad'></Button>
      <br />
      <Header text='statistics'></Header>
      <Stat stat='good' amount={good}></Stat>
      <Stat stat='neutral' amount={neutral}></Stat>
      <Stat stat='bad' amount={bad}></Stat>
      <Stat stat='all' amount={all}></Stat>
      <Stat stat='average' amount={average()}></Stat>
      <Percent text='positive' amount={positivePercent()}></Percent>
    </div>
  )
}

export default App