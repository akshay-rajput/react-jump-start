import RJSLogo from '/logo.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <img src={RJSLogo} className="logo" alt="RJS logo" />
      </div>
      
      <h1>React Jump Start</h1>

      <div className="card">
        list of included things
        - tailwind v4
        - react 19
        - react-router v7
      </div>
    </>
  )
}

export default App
