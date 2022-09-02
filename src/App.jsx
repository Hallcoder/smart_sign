import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { useEffect } from 'react'
import Welcome from './pages/welcome'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = 'Smart Sign ~ Quick and efficient';
  })
  return (
    <div className="min-h-screen">
      <Welcome />
    </div>
  )
}

export default App
