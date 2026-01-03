import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Calculator from './pages/Calculator'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculadora" element={<Calculator />} />
    </Routes>
  )
}

export default App