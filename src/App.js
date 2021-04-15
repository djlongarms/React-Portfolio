import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Portfolio from './pages/Portfolio'
import Home from './pages/Home'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="body">
        <Header />
        <Switch>
          <Route exact path='/react-portfolio/'>
            <Home />
          </Route>
          <Route path='/react-portfolio/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/react-portfolio/contact'>
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
