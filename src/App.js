import {Switch} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => (
  <div className="whole_container">
    <div className="logo_h1_con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
        alt="ipl logo"
        className="ipl_logo"
      />
      <h1 className="h1_con">ipl dashboard</h1>
    </div>
    <Home />
    <Switch>
      <NotFound />
    </Switch>
  </div>
)

export default App
