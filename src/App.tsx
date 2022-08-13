import api from './services/api'
import Navbar from './components/NavBar/Navbar'
import './main.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Tech from './pages/About/About'

const App = () => {
  
const getData = () => {
  api.get('/').then(response => {
    console.log(response.data)
  })
}

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<Tech/>} />
      </Routes>
    </Router>
  )
}

export default App
