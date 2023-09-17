import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticsLine = ({ text, value} ) =>(
<tr>
  <td>{text}</td>
  <td>{value}</td>
</tr> 
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const toIncrement = (state, setState) => () => setState(state + 1)

  const Statistics = ({ good, neutral, bad}) => {
    const allStats = good + neutral + bad
    const average = (good - bad) / allStats
    const positive = `${(good / allStats) * 100} %`

    return allStats > 0 ? (
      <>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticsLine text="Good:" value={good} />
            <StatisticsLine text="Neutral:" value={neutral} />
            <StatisticsLine text="Bad:" value={bad} />
            <StatisticsLine text="All:" value={allStats} />
            <StatisticsLine text="average:" value={average} />
            <StatisticsLine text="positive:" value={positive} />
          </tbody>
        </table>
        
      </>
    ) : (
      <p>No feedback given</p>
    )
  }
  

  return (
    <div>
      <h1>Give Feedback!</h1>
      <Button onClick={toIncrement(good, setGood)} text="good" />
      <Button onClick={toIncrement(neutral, setNeutral)} text="neutral" />
      <Button onClick={toIncrement(bad, setBad)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App