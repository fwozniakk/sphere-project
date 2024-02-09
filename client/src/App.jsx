import { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Sphere Container Demo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
