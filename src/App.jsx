import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LineChart, Line } from 'recharts'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([{x: 1, y: 5}, {x: 2, y: 7}, {x: 3, y: 6}, {x: 4, y: 6}])

  return (
    <>
  <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="y" stroke="#8884d8" />
  </LineChart>
    </>
  )
}

export default App
