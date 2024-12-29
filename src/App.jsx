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

const Anecdote = ({ anecdote, votes }) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  // estado de seleccion
  const [selected, setSelected] = useState(0)
  
  // estado de los votos
  let template = {}
  anecdotes.forEach((_, index) => {
    template[index] = 0
  }) 
  const [votes, setVotes] = useState(template)
  
  console.log('seleccionado:', selected, ' | votos:', votes[selected])
  console.log(votes)

  const getRandomIndex = (param) => {
    return Math.floor(Math.random() * param);
  }

  const mostVoted = () => {
    const maxIndex =  Object.keys(votes).reduce((maxKey, currentKey) => 
      votes[currentKey] > votes[maxKey] ? currentKey : maxKey
    );
    return maxIndex
  }

  const handleClickVote = () => {
    const newVotes = { ...votes, [selected]: votes[selected] + 1}
    setVotes(newVotes)
  }

  const handleClickAnecdote = () => {
    const random = getRandomIndex(anecdotes.length)
    setSelected(random)
  }

  return (
    <>
      <Header text='Anecdote of the day'></Header>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]}></Anecdote>
      <Button onClick={handleClickVote} text='vote'></Button>
      <Button onClick={handleClickAnecdote} text='next anecdote'></Button>
      <Header text='Anecdote with most votes'></Header>
      <Anecdote anecdote={anecdotes[mostVoted()]} votes={votes[mostVoted()]}></Anecdote>
    </>
  )
}

export default App