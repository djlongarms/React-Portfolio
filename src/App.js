import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div>
        <div>
          <Link to='/'>Home </Link>
          <Link to='/portfolio'>Portfolio </Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
