import { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>
  


const Button = ({handleClick, name}) =>  
    <div>
      <button onClick= {handleClick}>
        {name}
      </button>
    </div>
  


const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => 
      setCounter(counter +  1);


  const setToZero = () =>
      setCounter(0);
  
  const decreaseByOne = () => setCounter(counter - 1);

  return (
    <div>
      <Display counter={counter}/>
      <Button handleClick={increaseByOne} name="plus"/>
      <Button handleClick={setToZero} name="zero"/>
      <Button handleClick={decreaseByOne} name="minus"/>
    </div>
  )
}

export default App