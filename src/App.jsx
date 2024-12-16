import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([{x: 1, y: 5}, {x: 2, y: 7}, {x: 3, y: 6}, {x: 4, y: 6}])

  return (
    <>
  <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="y" stroke="#8884d8" />
    {
    // Adding a dashed grid in the background
    }
    <CartesianGrid stroke='#ccc' strokeDasharray={'5 5'} />

    {// X axis with datakey of the dataset
  }
    <XAxis dataKey={'x'} />
    {

    // Without the following line, there is no y axis
    }
    <YAxis />

    {
    // Tooltip shows information of the data when hovering over it
    }
    <Tooltip></Tooltip>
  </LineChart>
    </>
  )
}

export default App
