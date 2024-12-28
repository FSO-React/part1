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


const App13 = () => {
  const exercise = 'Exercise 1.3'
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const parts = [
    { name: part1.name, exercises: part1.exercises },
    { name: part2.name, exercises: part1.exercises },
    { name: part3.name, exercises: part1.exercises },
  ]

  return (
    <div>
      <Header course={course} exercise={exercise}></Header>
      <Content parts={parts}></Content>
      <Total parts={parts}></Total>
    </div>
  )
}

export default App13