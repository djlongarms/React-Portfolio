import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Header from './components/Header'
import Portfolio from './pages/Portfolio'
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div>
        <Header />
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
