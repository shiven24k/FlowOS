import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import {Auth} from './pages/auth'
import Project from './pages/project'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project/>}/>
      </Routes>
    </Router>
  )
}

export default App
