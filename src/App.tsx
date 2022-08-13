import api from './services/api'
function App() {
  
async function getData() {
  const response = await api.get('/')
  console.log(response.data)
}

  return (
    <div className="App">
      hello
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App
