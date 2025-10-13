import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home.jsx"
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Posts from './Pages/Posts.jsx'
import Nav from './components/Nav.jsx'
import Users from './Pages/Users.jsx'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users/:id" element={<Users />}/>
      </Routes>
    <div>

    </div>
    </Router>
  )
}

export default App
