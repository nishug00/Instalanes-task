import { useState } from 'react'
import './App.css'
import Print from './Pages/Print'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Print />
    </>
  )
}

export default App
