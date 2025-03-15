import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Register />}></Route>
      </Routes>
    </>
  )
}

export default App
