import { useState } from 'react'

const StatisticLine = props => (
  <div>
    {props.label}
    {props.value}
  </div>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [averageScore, setAverage] = useState(0)

  const handleGoodClick = () => {
    console.log("Before good click: ", good)
    const updatedGood = good + 1
    setGood(updatedGood)
    setAll(all + 1)
    setAverage(averageScore + 1)
  }

  const handleNeutralClick = () => {
    console.log("Before neutral click: ", neutral)
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setAll(all + 1)
  }

  const handleBadClick = () => {
    console.log("Before bad click: ", bad)
    const updatedBad = bad + 1
    setBad(updatedBad)
    setAll(all + 1)
    setAverage(averageScore - 1)
  }

  return (
    <div>
      <div><span style={{ fontWeight: 'bold', fontSize: 30 }}>Give Feedback</span></div>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <div><span style={{ fontWeight: 'bold', fontSize: 30 }}>Statistics</span></div>
      <table>
        <tbody>
          <tr><td><StatisticLine value={good} label={"Good "} /></td></tr>
          <tr><td><StatisticLine value={neutral} label={"Neutral "} /></td></tr>
          <tr><td><StatisticLine value={bad} label={"Bad "} /></td></tr>
          <tr><td><StatisticLine value={all} label={"All "} /></td></tr>
          <tr><td><StatisticLine value={averageScore / all} label={"Average "} /></td></tr>
          <tr><td><div>Positive {(good * 100) / all} %</div></td></tr>
        </tbody>
      </table>
    </div>
  )
}

export default App

// import { useState } from 'react'

// const Display = props => <div>{props.value}</div>

// const Button = (props) => (
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// )

// const History = (props) => {

//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         The app is used by pressing the buttons.
//       </div>
//     )
//   }
//   return (
//     <div>
//       Button press history: {props.allClicks.join(' ')}
//     </div>
//   )

// }

// const App = () => {

//   const [value, setValue] = useState(10)

//   const setToValue = (newValue) => {
//     console.log('value now', newValue)
//     setValue(newValue)
//   }

//     return (
//       <div>
//         <Display value={value} />
//         <Button handleClick={() => setToValue(1000)} text="thousand" />  
//         <Button handleClick={() => setToValue(0)} text="reset" />      
//         <Button handleClick={() => setToValue(value + 1)} text="increment" />    
//       </div>
//     )

// }

// export default App