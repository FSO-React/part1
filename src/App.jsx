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
  return (
    <p>{stat}: {amount}</p>
  )
}


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handlerClickGood = () => {
    setGood(good + 1)
  }

  const handlerClickNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handlerClickBad = () => {
    setBad(bad + 1)
  }

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
    </div>
  )
}

export default App