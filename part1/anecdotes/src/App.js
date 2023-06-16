import { useState } from 'react'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.function}> {props.text} </button>
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
  
  var ary = new Uint8Array(anecdotes.length);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(ary);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let final= Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    while(final===selected){
      final= Math.floor(Math.random() * (max - min) + min);
    }
    return final;
  }

  const handleVotesClick = () => {
    const newVotes = [... votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  }

  let maxVote = Math.max(...votes);
  let maxVoteIndex = votes.indexOf(maxVote);
  console.log(maxVote);
  console.log(maxVoteIndex);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br></br>
      has {votes[selected]} votes
      <Button function= {handleVotesClick} text= "vote"/>
      <Button function={()=>setSelected(getRandomInt(0,anecdotes.length))} text= "next anecdote"/>
      <h1>Anecdote with the most votes</h1>
      {anecdotes[maxVoteIndex]}
      <br></br>
      has {maxVote} votes
    </div>
      
  )
}

export default App