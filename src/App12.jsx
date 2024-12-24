const Header = (props) => {
  return (
    <h1>{props.course} | {props.exercise}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      {props.parts.map((part, index) => (
        <Part key={index} part={part} index={index}></Part>
      ))}
    </>
  )
}


const Part = (props) => {
  return (
    <p key={props.index}>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Total = (props) => {
  const totalExercises = props.parts.reduce((acc, part) => acc + part.exercises, 0)
  return (
    <p>Number of exercises {totalExercises}</p>
  )
}


const App12 = () => {
  const exercise = 'Exercise 1.2'
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [
    { name: part1, exercises: exercises1 },
    { name: part2, exercises: exercises2 },
    { name: part3, exercises: exercises3 }
  ]

  return (
    <div>
      <Header course={course} exercise={exercise}></Header>
      <Content parts={parts}></Content>
      <Total parts={parts}></Total>
    </div>
  )
}

export default App12