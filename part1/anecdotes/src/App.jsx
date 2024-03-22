import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const DisplayMostVotedAnecdote = (props) => {

  let maxVotes = Math.max(...props.points)

  if (maxVotes === 0) {
    return (
      <div>
        No Votes Yet.
      </div>
    )
  }
  
  let mostVotedIndex = -1;
  for (let i = 0; i < props.points.length; i++) {
    if (props.points[i] === maxVotes) {
      mostVotedIndex = i;
      break;
    }
  }

  return (
    props.anecdotes[mostVotedIndex]
  )

}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const voteTemplate = [0, 0, 0, 0, 0, 0, 0, 0]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(voteTemplate)

  const handleSelection = () => {
    setSelected(getRandomInt(7))
  }

  const handleVote = () => {
    setPoints(prevPoints => {
      const newPoints = [...prevPoints];
      newPoints[selected] += 1;
      return newPoints;
    });
  }

  return (
    <div>
      <div><span style={{ fontWeight: 'bold', fontSize: 30 }}>Anecdote of the Day</span></div>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <div>
      <Button handleClick={handleVote} text='vote' />
      <Button handleClick={handleSelection} text='next anecdote' />
      </div>
      <div><span style={{ fontWeight: 'bold', fontSize: 30 }}>Anecdote With Most Votes</span></div>
      <DisplayMostVotedAnecdote points={points} anecdotes={anecdotes} />
    </div>
  )
}

export default App
