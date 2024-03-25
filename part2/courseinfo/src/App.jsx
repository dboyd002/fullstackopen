import React from "react"

const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part }) => {
  return (
    <li style={{listStyleType: 'none'}}>
      {part.name} {part.exercises}
    </li>
  )
}

const Content = ({ parts }) => {
  return (
    <ul>
      {parts.map(part => 
        <Part key={part.id} part={part} />
      )}
    </ul>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((acc, currentOrder) => {
      
  }, 0)
}

const Course = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      <div><Content parts={course.parts} /></div>
    </div>
  )
}
  

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
    ]
  }

  return <Course course={course} />
}

export default App