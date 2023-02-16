import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar/Navbar'
import Info from './components/info/Info'
import Main from './components/main/Main'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Info />
      <Main />
    </div>
  )
}

export default App
