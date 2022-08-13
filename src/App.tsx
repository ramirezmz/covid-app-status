import api from './services/api'
import Navbar from './components/NavBar/Navbar'
import './main.scss'

const App = () => {
  
const getData = () => {
  api.get('/').then(response => {
    console.log(response.data)
  })
}

  return (
    <div className="App">
      <Navbar />
      hello
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App
