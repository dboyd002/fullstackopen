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
  const total = parts.reduce((acc, currentValue) => {
      return acc + currentValue.exercises
  }, 0)
  return (
    <div>total of {total} exercises</div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <div><Content parts={course.parts} /></div>
    </div>
  )
}
  
const Courses = ({ courses }) => {
  const temp = courses.map((course, index) => (
    <div key={index}>
      <Course course={course} />
      <Total parts={course.parts} />
    </div>
  ));
  console.log(temp)
  return temp
}

export default Courses