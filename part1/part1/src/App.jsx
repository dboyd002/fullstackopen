import { useState } from 'react'

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {

  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    setCounter(counter + 1)
    console.log("increasing, value before was: ", counter)
  }

  const decreaseByOne = () => {
    setCounter(counter - 1)
    console.log("decreasing, value before was: ", counter)
  }

  const setToZero = () => {
    setCounter(0)
    console.log("resetting to zero, value before was: ", counter)
  }

  return (
    <div>
      <Display counter={counter}/>
      <Button
      onClick={increaseByOne}
      text = "plus"
      />
      <Button
      onClick={decreaseByOne}
      text = "minus"
      />
      <Button
      onClick={setToZero}
      text = "zero"
      />
    </div>
  )
}

export default App