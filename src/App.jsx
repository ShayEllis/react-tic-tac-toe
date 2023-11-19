import { useState } from 'react'
import { Square } from './components/square/square'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Square />
    </>
  )
}

export default App
