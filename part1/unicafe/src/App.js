import { useState } from 'react'

const Heading = ({text}) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Button = (props) => {

  return (
    <div>
      <button onClick={props.function}> {props.text} </button>
    </div>
  )
}

const Statistics = (props) => {
  if (props.good+props.bad+props.neutral===0)
  {
    return(
      <div>
        No feedback given
      </div>
    )
  }
    return(
      <div>
        <table>
          <tbody>
          <tr>
            <td> good </td>
            <td> {props.good} </td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{props.neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{props.bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{props.good+props.neutral+props.bad}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{(props.good-props.bad)/(props.good+props.neutral+props.bad)}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{(props.good/(props.good+props.bad+props.neutral))*100} %</td>
          </tr>
          </tbody>
        </table>
      </div>
    )
}

const StatisticLine = ({text, variable, extra}) => {
  return(
    <div>
      {text} {variable} {extra} 
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Heading text="give feedback"/>
      <Button text="good" function={()=> setGood(good+1)}/> 
      <Button text="neutral" function={()=> setNeutral(neutral+1)}/>
      <Button text="bad" function={()=> setBad(bad+1)}/>
      <Heading text="statistics"/>
      <Statistics good= {good} neutral={neutral} bad={bad}/>
      
      </div>
  )
}

export default App